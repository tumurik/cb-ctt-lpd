package org.acme.schooltimetabling.domain;

import ai.timefold.solver.core.api.domain.solution.PlanningSolution;
import ai.timefold.solver.core.api.domain.solution.PlanningEntityCollectionProperty;
import ai.timefold.solver.core.api.domain.solution.PlanningScore;
import ai.timefold.solver.core.api.domain.solution.ProblemFactCollectionProperty;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeProvider;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;

import java.util.List;

@PlanningSolution
public class Timetable {

    // Problem facts
    @ProblemFactCollectionProperty
    private List<Course> courseList;

    @ProblemFactCollectionProperty
    private List<Room> roomList;

    @ProblemFactCollectionProperty
    private List<Curriculum> curriculumList;

    @ProblemFactCollectionProperty
    private List<UnavailabilityConstraint> unavailabilityConstraintList;

    @PlanningEntityCollectionProperty
    private List<Lecture> lectureList;

    // For day and period variables
    @ValueRangeProvider(id = "dayRange")
    private List<Integer> dayRange;

    @ValueRangeProvider(id = "periodRange")
    private List<Integer> periodRange;

    @ValueRangeProvider(id = "roomRange")
    private List<Room> roomRange;

    @PlanningScore
    private HardSoftScore score;

    // Constructors
    public Timetable() {
    }

    public Timetable(List<Course> courseList,
                     List<Room> roomList,
                     List<Curriculum> curriculumList,
                     List<UnavailabilityConstraint> unavailabilityConstraintList,
                     List<Lecture> lectureList,
                     List<Integer> dayRange,
                     List<Integer> periodRange) {
        this.courseList = courseList;
        this.roomList = roomList;
        this.curriculumList = curriculumList;
        this.unavailabilityConstraintList = unavailabilityConstraintList;
        this.lectureList = lectureList;
        this.dayRange = dayRange;
        this.periodRange = periodRange;
        this.roomRange = roomList;
    }

    // Getters and setters
    public List<Course> getCourseList() { return courseList; }

    public List<Room> getRoomList() { return roomList; }

    public List<Curriculum> getCurriculumList() { return curriculumList; }

    public List<UnavailabilityConstraint> getUnavailabilityConstraintList() { return unavailabilityConstraintList; }

    public List<Lecture> getLectureList() { return lectureList; }

    public List<Integer> getDayRange() { return dayRange; }

    public List<Integer> getPeriodRange() { return periodRange; }

    public List<Room> getRoomRange() { return roomRange; }

    public HardSoftScore getScore() { return score; }

    public void setScore(HardSoftScore score) { this.score = score; }
}