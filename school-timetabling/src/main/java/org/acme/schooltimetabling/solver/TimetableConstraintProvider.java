package org.acme.schooltimetabling.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import ai.timefold.solver.core.api.score.stream.Joiners;
import org.acme.schooltimetabling.domain.Course;
import org.acme.schooltimetabling.domain.UnavailabilityConstraint;

public class TimetableConstraintProvider implements ConstraintProvider {

    @Override
    public Constraint[] defineConstraints(ConstraintFactory constraintFactory) {
        return new Constraint[]{
                scheduleAllLectures(constraintFactory),
                roomOccupancy(constraintFactory),
                teacherAndCurriculumConflict(constraintFactory),
                teacherAvailability(constraintFactory),
                roomCapacity(constraintFactory),
                roomStability(constraintFactory)
        };
    }

    // Hard constraints
    private Constraint scheduleAllLectures(ConstraintFactory constraintFactory) {
        return constraintFactory.forEach(Course.class)
                .filter(course -> course.getTimeslot() == null || course.getRoom() == null)
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("All lectures must be scheduled");
    }

    private Constraint roomOccupancy(ConstraintFactory constraintFactory) {
        return constraintFactory.forEachUniquePair(Course.class,
                        Joiners.equal(Course::getTimeslot),
                        Joiners.equal(Course::getRoom))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("Room occupancy conflict");
    }

    private Constraint teacherAndCurriculumConflict(ConstraintFactory constraintFactory) {
        return constraintFactory.forEachUniquePair(Course.class,
                        Joiners.equal(Course::getTimeslot),
                        Joiners.equal(Course::getTeacher))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("Teacher conflict");
    }

    private Constraint teacherAvailability(ConstraintFactory constraintFactory) {
        return constraintFactory.forEach(UnavailabilityConstraint.class)
                .join(Course.class,
                        Joiners.equal(UnavailabilityConstraint::getCourseId, Course::getId),
                        Joiners.equal(UnavailabilityConstraint::getDay, course -> course.getTimeslot().getDay()),
                        Joiners.equal(UnavailabilityConstraint::getPeriod, course -> course.getTimeslot().getTimeslot()))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("Teacher availability conflict");
    }

    // Soft constraints
    private Constraint roomCapacity(ConstraintFactory constraintFactory) {
        return constraintFactory.forEach(Course.class)
                .filter(course -> course.getRoom() != null &&
                        course.getNumberOfStudents() > course.getRoom().getCapacity())
                .penalize(HardSoftScore.ONE_SOFT,
                        course -> course.getNumberOfStudents() - course.getRoom().getCapacity())
                .asConstraint("Room capacity exceeded");
    }

    private Constraint roomStability(ConstraintFactory constraintFactory) {
        return constraintFactory.forEachUniquePair(Course.class,
                        Joiners.equal(Course::getId))
                .filter((course1, course2) -> !course1.getRoom().equals(course2.getRoom()))
                .penalize(HardSoftScore.ONE_SOFT)
                .asConstraint("Room stability violated");
    }
}
