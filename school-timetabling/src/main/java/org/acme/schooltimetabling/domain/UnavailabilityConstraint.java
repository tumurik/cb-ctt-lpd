package org.acme.schooltimetabling.domain;

public class UnavailabilityConstraint {

    private String courseId; // Course ID with the constraint
    private int day;         // Cannot be scheduled
    private int period;

    // Constructors
    public UnavailabilityConstraint() {
    }

    public UnavailabilityConstraint(String courseId, int day, int period) {
        this.courseId = courseId;
        this.day = day;
        this.period = period;
    }

    // Getters and setters
    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getPeriod() {
        return period;
    }

    public void setPeriod(int period) {
        this.period = period;
    }

    @Override
    public String toString() {
        return "UnavailabilityConstraint{" +
                "courseId='" + courseId + '\'' +
                ", day=" + day +
                ", period=" + period +
                '}';
    }
}