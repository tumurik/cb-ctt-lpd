package org.acme.schooltimetabling.domain;

public class UnavailabilityConstraint {

    private Course course; // Course ID with the constraint
    private int day; // Cannot be scheduled day/period
    private int period;

    // Constructors
    public UnavailabilityConstraint() {
    }

    public UnavailabilityConstraint(Course course, int day, int period) {
        this.course = course;
        this.day = day;
        this.period = period;
    }

    // Getters and setters
    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
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
                "course='" + course + '\'' +
                ", day=" + day +
                ", period=" + period +
                '}';
    }
}