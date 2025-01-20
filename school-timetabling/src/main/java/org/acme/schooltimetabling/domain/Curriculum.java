package org.acme.schooltimetabling.domain;

import ai.timefold.solver.core.api.domain.lookup.PlanningId;

import java.util.List;

public class Curriculum {

    @PlanningId
    private String curriculumId;
    private List<Course> memberCourses; // List of curriculum courses

    // Constructors
    public Curriculum() {
    }

    public Curriculum(String curriculumId, List<Course> memberCourses) {
        this.curriculumId = curriculumId;
        this.memberCourses = memberCourses;
    }

    // Getters and setters
    public String getCurriculumId() {
        return curriculumId;
    }

    public void setCurriculumId(String curriculumId) {
        this.curriculumId = curriculumId;
    }

    public List<Course> getMemberCourses() {
        return memberCourses;
    }

    public void setMemberCourses (List<Course> courseIds) {
        this.memberCourses = memberCourses;
    }

    @Override
    public String toString() {
        return "Curriculum{" +
                "curriculumId='" + curriculumId + '\'' +
                ", memberCourses=" + memberCourses +
                '}';
    }
}