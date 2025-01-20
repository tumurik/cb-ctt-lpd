package org.acme.schooltimetabling.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import ai.timefold.solver.core.api.score.stream.Joiners;
import org.acme.schooltimetabling.domain.Lecture;
import org.acme.schooltimetabling.domain.Course;
import org.acme.schooltimetabling.domain.Curriculum;
import org.acme.schooltimetabling.domain.UnavailabilityConstraint;

import java.util.List;
import java.util.Objects;

public class TimetableConstraintProvider implements ConstraintProvider {

    @Override
    public Constraint[] defineConstraints(ConstraintFactory constraintFactory) {
        return new Constraint[]{
                // Hard constraints
                scheduleAllLectures(constraintFactory),
                roomOccupancy(constraintFactory),
                teacherConflict(constraintFactory),
                teacherAvailability(constraintFactory),
                curriculumConflict(constraintFactory),

                // Soft constraints
                roomCapacity(constraintFactory),
                roomStability(constraintFactory)
        };
    }
    
    // Hard constraints

    // lectures must be assigned a valid day, period, and room
    private Constraint scheduleAllLectures(ConstraintFactory constraintFactory) {
        return constraintFactory.forEach(Lecture.class)
                .filter(lecture ->
                        lecture.getDay() == null
                                || lecture.getPeriod() == null
                                || lecture.getRoom() == null)
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("All lectures must be scheduled");
    }

    // lectures cannot share the same day, period, room
    private Constraint roomOccupancy(ConstraintFactory constraintFactory) {
        return constraintFactory.forEachUniquePair(Lecture.class,
                        Joiners.equal(Lecture::getDay),
                        Joiners.equal(Lecture::getPeriod),
                        Joiners.equal(Lecture::getRoom))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("Room occupancy conflict");
    }

    // lectures that happen in the same time cannot have same teacher
    private Constraint teacherConflict(ConstraintFactory constraintFactory) {
        return constraintFactory.forEachUniquePair(Lecture.class,
                        Joiners.equal(Lecture::getDay),
                        Joiners.equal(Lecture::getPeriod),
                        // same teacher => lecture1.getCourse().getTeacher() == lecture2.getCourse().getTeacher()
                        Joiners.equal(l -> l.getCourse().getTeacher()))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("Teacher conflict");
    }

    // teacher must be available for given lecture's time
    private Constraint teacherAvailability(ConstraintFactory constraintFactory) {
        return constraintFactory.forEach(Lecture.class)
                .join(UnavailabilityConstraint.class,
                        Joiners.equal(Lecture::getCourse, UnavailabilityConstraint::getCourse),
                        Joiners.equal(Lecture::getDay, UnavailabilityConstraint::getDay),
                        Joiners.equal(Lecture::getPeriod, UnavailabilityConstraint::getPeriod)
                )
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("Teacher and course unavailability conflict");
    }

    // lectures with common curriculum cannot overlap
    private Constraint curriculumConflict(ConstraintFactory constraintFactory) {
        return constraintFactory.forEachUniquePair(Lecture.class,
                Joiners.equal(Lecture::getDay),
                Joiners.equal(Lecture::getPeriod))
            .filter((l1, l2) -> shareCurriculum(l1.getCurriculumList(), l2.getCurriculumList()))
            .penalize(HardSoftScore.ONE_HARD)
            .asConstraint("Curriculum conflict");
    }

    private boolean shareCurriculum(List<Curriculum> list1, List<Curriculum> list2) {
        // Check for any common curriculum
        for (Curriculum curriculum : list1) {
            if (list2.contains(curriculum)) {
                return true;
            }
        }
        return false;
    }

    // Soft constraints

    //  check if room capacity >= students
    private Constraint roomCapacity(ConstraintFactory constraintFactory) {
        return constraintFactory.forEach(Lecture.class)
                .filter(lecture ->
                        lecture.getRoom() != null
                                && lecture.getCourse().getNumberOfStudents() > lecture.getRoom().getCapacity())
                .penalize(HardSoftScore.ONE_SOFT,
                        lecture -> lecture.getCourse().getNumberOfStudents()
                                - lecture.getRoom().getCapacity())
                .asConstraint("Room capacity exceeded");
    }

    // lecture's better be in the same room
    private Constraint roomStability(ConstraintFactory constraintFactory) {
        return constraintFactory.forEachUniquePair(Lecture.class,
                        Joiners.equal(l -> l.getCourse()))
                .filter((l1, l2) ->
                        l1.getRoom() != null
                                && l2.getRoom() != null
                                && !Objects.equals(l1.getRoom(), l2.getRoom()))
                .penalize(HardSoftScore.ONE_SOFT)
                .asConstraint("Room stability violated");
    }
}
