package org.acme.schooltimetabling.domain;

import ai.timefold.solver.core.api.domain.lookup.PlanningId;

import java.util.List;

public class Curriculum {

    @PlanningId
    private String id;
    private List<String> courseIds; // List of course IDs

    // Constructors
    public Curriculum() {
    }

    public Curriculum(String id, List<String> courseIds) {
        this.id = id;
        this.courseIds = courseIds;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<String> getCourseIds() {
        return courseIds;
    }

    public void setCourseIds(List<String> courseIds) {
        this.courseIds = courseIds;
    }

    @Override
    public String toString() {
        return "Curriculum{" +
                "id='" + id + '\'' +
                ", courseIds=" + courseIds +
                '}';
    }
}