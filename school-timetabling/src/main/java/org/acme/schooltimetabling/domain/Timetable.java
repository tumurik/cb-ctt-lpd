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
    @ValueRangeProvider(id = "roomRange")
    private List<Room> roomList;

    @ProblemFactCollectionProperty
    @ValueRangeProvider(id = "timeslotRange")
    private List<Timeslot> timeslotList;

    @ProblemFactCollectionProperty
    private List<UnavailabilityConstraint> unavailabilityConstraintList;

    @ProblemFactCollectionProperty
    private List<Curriculum> curriculumList;

    // Planning entities
    @PlanningEntityCollectionProperty
    private List<Course> courseList;

    // Planning score
    @PlanningScore
    private HardSoftScore score;

    // Constructors
    public Timetable() {
    }

    public Timetable(List<Room> roomList, List<Timeslot> timeslotList, List<UnavailabilityConstraint> unavailabilityConstraintList,
                     List<Curriculum> curriculumList, List<Course> courseList) {
        this.roomList = roomList;
        this.timeslotList = timeslotList;
        this.unavailabilityConstraintList = unavailabilityConstraintList;
        this.curriculumList = curriculumList;
        this.courseList = courseList;
        this.score = HardSoftScore.ZERO;
    }

    // Getters and setters
    public List<Room> getRoomList() {
        return roomList;
    }

    public void setRoomList(List<Room> roomList) {
        this.roomList = roomList;
    }

    public List<Timeslot> getTimeslotList() {
        return timeslotList;
    }

    public void setTimeslotList(List<Timeslot> timeslotList) {
        this.timeslotList = timeslotList;
    }

    public List<UnavailabilityConstraint> getUnavailabilityConstraintList() {
        return unavailabilityConstraintList;
    }

    public void setUnavailabilityConstraintList(List<UnavailabilityConstraint> unavailabilityConstraintList) {
        this.unavailabilityConstraintList = unavailabilityConstraintList;
    }

    public List<Curriculum> getCurriculumList() {
        return curriculumList;
    }

    public void setCurriculumList(List<Curriculum> curriculumList) {
        this.curriculumList = curriculumList;
    }

    public List<Course> getCourseList() {
        return courseList;
    }

    public void setCourseList(List<Course> courseList) {
        this.courseList = courseList;
    }

    public HardSoftScore getScore() {
        return score;
    }

    public void setScore(HardSoftScore score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "Timetable{" +
                "roomList=" + roomList +
                ", timeslotList=" + timeslotList +
                ", unavailabilityConstraintList=" + unavailabilityConstraintList +
                ", curriculumList=" + curriculumList +
                ", courseList=" + courseList +
                ", score=" + score +
                '}';
    }
}