//package org.acme.schooltimetabling.solver;
//
//import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
//import ai.timefold.solver.core.api.score.calculator.EasyScoreCalculator;
//import org.acme.schooltimetabling.domain.Timetable;
//import org.acme.schooltimetabling.domain.Course;
//import org.acme.schooltimetabling.domain.Curriculum;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//public class EasyCostFunction implements EasyScoreCalculator<Timetable, HardSoftScore> {
//
//    @Override
//    public HardSoftScore calculateScore(Timetable timetable) {
//        int hardScore = 0;
//        int softScore = 0;
//
//        // Hard constraints
//        for (Course course1 : timetable.getCourseList()) {
//            // All lectures are scheduled
//            if (course1.getTimeslot() == null || course1.getRoom() == null) {
//                hardScore -= 1;
//            }
//
//            for (Course course2 : timetable.getCourseList()) {
//                if (course1 != course2) {
//                    // Prevent multiple courses in the same room at the same time
//                    if (course1.getRoom() != null && course1.getRoom().equals(course2.getRoom()) &&
//                            course1.getTimeslot() != null && course1.getTimeslot().equals(course2.getTimeslot())) {
//                        hardScore -= 1;
//                    }
//
//                    // Prevent teachers or curricula conflicts
//                    if (course1.getTeacher() != null && course1.getTeacher().equals(course2.getTeacher()) &&
//                            course1.getTimeslot() != null && course1.getTimeslot().equals(course2.getTimeslot())) {
//                        hardScore -= 1;
//                    }
//                }
//            }
//
//            // Teacher availability
//            if (course1.getTeacher() != null && course1.getTimeslot() != null &&
//                    timetable.getUnavailabilityConstraintList().stream().anyMatch(uc ->
//                            uc.getCourseId().equals(course1.getId()) &&
//                                    uc.getDay() == course1.getTimeslot().getDay() &&
//                                    uc.getPeriod() == course1.getTimeslot().getTimeslot())) {
//                hardScore -= 1;
//            }
//        }
//
//        // Soft constraints
//        for (Course course : timetable.getCourseList()) {
//            // Room capacity
//            if (course.getRoom() != null && course.getRoom().getCapacity() < course.getNumberOfStudents()) {
//                softScore -= (course.getNumberOfStudents() - course.getRoom().getCapacity());
//            }
//
//            // Curriculum compactness
//            if (!isCurriculumCompact(timetable, course)) {
//                softScore -= 1;
//            }
//
//            // Room stability
//            if (!isRoomStable(timetable, course)) {
//                softScore -= 1;
//            }
//        }
//
//        return HardSoftScore.of(hardScore, softScore);
//    }
//
//    private boolean isCurriculumCompact(Timetable timetable, Course course) {
//        List<Curriculum> relatedCurricula = timetable.getCurriculumList().stream()
//                .filter(curriculum -> curriculum.getCourseIds().contains(course.getId()))
//                .collect(Collectors.toList());
//
//        for (Curriculum curriculum : relatedCurricula) {
//            List<Course> relatedCourses = timetable.getCourseList().stream()
//                    .filter(c -> curriculum.getCourseIds().contains(c.getId()) && c.getTimeslot() != null)
//                    .collect(Collectors.toList());
//
//            for (Course otherCourse : relatedCourses) {
//                if (!otherCourse.equals(course) &&
//                        otherCourse.getTimeslot().getDay() == course.getTimeslot().getDay() &&
//                        Math.abs(otherCourse.getTimeslot().getTimeslot() - course.getTimeslot().getTimeslot()) == 1) {
//                    return true;
//                }
//            }
//        }
//
//        return false;
//    }
//
//    private boolean isRoomStable(Timetable timetable, Course course) {
//        return timetable.getCourseList().stream().filter(c -> c.getId().equals(course.getId()))
//                .map(Course::getRoom).distinct().count() == 1;
//    }
//}