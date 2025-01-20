package org.acme.schooltimetabling.domain;

import ai.timefold.solver.core.api.domain.lookup.PlanningId;

public class Course {

    @PlanningId
    private String courseId;
    private String teacher;
    private int numberOfLectures; // Number of lectures required
    private int minWorkingDays; // Minimum working days needed
    private int numberOfStudents; // Number of students enrolled

    // Constructors
    public Course() {
    }

    public Course(String courseId, String teacher, int numberOfLectures, int minWorkingDays, int numberOfStudents) {
        this.courseId = courseId;
        this.teacher = teacher;
        this.numberOfLectures = numberOfLectures;
        this.minWorkingDays = minWorkingDays;
        this.numberOfStudents = numberOfStudents;
    }

    // Getters and setters
    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public int getNumberOfLectures() {
        return numberOfLectures;
    }

    public void setNumberOfLectures(int numberOfLectures) {
        this.numberOfLectures = numberOfLectures;
    }

    public int getMinWorkingDays() {
        return minWorkingDays;
    }

    public void setMinWorkingDays(int minWorkingDays) {
        this.minWorkingDays = minWorkingDays;
    }

    public int getNumberOfStudents() {
        return numberOfStudents;
    }

    public void setNumberOfStudents(int numberOfStudents) {
        this.numberOfStudents = numberOfStudents;
    }


    @Override
    public String toString() {
        return "Course{" +
                "courseId='" + courseId + '\'' +
                ", teacher='" + teacher + '\'' +
                ", numberOfLectures=" + numberOfLectures +
                ", minWorkingDays=" + minWorkingDays +
                ", numberOfStudents=" + numberOfStudents +
                '}';
    }
}