package org.acme.schooltimetabling.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.variable.PlanningVariable;
import ai.timefold.solver.core.api.domain.lookup.PlanningId;

import java.util.List;

@PlanningEntity
public class Lecture {

    @PlanningId
    private String lectureId;
    private Course course;
    private List<Curriculum> curriculumList; // in what curriculum is this course

    @PlanningVariable(valueRangeProviderRefs = {"roomRange"})
    private Room room;

    @PlanningVariable(valueRangeProviderRefs = {"dayRange"})
    private Integer day;

    @PlanningVariable(valueRangeProviderRefs = {"periodRange"})
    private Integer period;

    // Constructor
    public Lecture() {
    }

    // Constructor to initialize all required fields
    public Lecture(String lectureId, Course course, List<Curriculum> curriculumList) {
        this.lectureId = lectureId;
        this.course = course;
        this.curriculumList = curriculumList;
    }

    public String getLectureId() {
        return lectureId;
    }

    public void setLectureId(String lectureId) {
        this.lectureId = lectureId;
    }

    public Course getCourse() {
        return course;
    }
    public List<Curriculum> getCurriculumList() {
        return curriculumList;
    }
    public void setCurriculumList(List<Curriculum> curriculumList) {
        this.curriculumList = curriculumList;
    }
    public Room getRoom() {
        return room;
    }
    public void setRoom(Room room) {
        this.room = room;
    }
    public Integer getDay() {
        return day;
    }
    public void setDay(Integer day) {
        this.day = day;
    }
    public Integer getPeriod() {
        return period;
    }
    public void setPeriod(Integer period) {
        this.period = period;
    }
}