package org.acme.schooltimetabling.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.lookup.PlanningId;
import ai.timefold.solver.core.api.domain.variable.PlanningVariable;

@PlanningEntity
public class Course {

    @PlanningId
    private String id;

    private String teacher; // Teacher id
    private int numberOfLectures; // Lectures required
    private int minWorkingDays; // Minimum days distribute to
    private int numberOfStudents; // Enrolled students

    @PlanningVariable(valueRangeProviderRefs = "timeslotRange")
    private Timeslot timeslot;

    @PlanningVariable(valueRangeProviderRefs = "roomRange")
    private Room room;

    // Constructors
    public Course() {
    }

    public Course(String id, String teacher, int numberOfLectures, int minWorkingDays, int numberOfStudents) {
        this.id = id;
        this.teacher = teacher;
        this.numberOfLectures = numberOfLectures;
        this.minWorkingDays = minWorkingDays;
        this.numberOfStudents = numberOfStudents;
    }

    public Course(String id, String teacher, int numberOfLectures, int minWorkingDays, int numberOfStudents, Timeslot timeslot, Room room) {
        this(id, teacher, numberOfLectures, minWorkingDays, numberOfStudents);
        this.timeslot = timeslot;
        this.room = room;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public Timeslot getTimeslot() {
        return timeslot;
    }

    public void setTimeslot(Timeslot timeslot) {
        this.timeslot = timeslot;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    @Override
    public String toString() {
        return "Course{" +
                "id='" + id + '\'' +
                ", teacher='" + teacher + '\'' +
                ", numberOfLectures=" + numberOfLectures +
                ", minWorkingDays=" + minWorkingDays +
                ", numberOfStudents=" + numberOfStudents +
                ", timeslot=" + (timeslot != null ? timeslot : "Unassigned") +
                ", room=" + (room != null ? room : "Unassigned") +
                '}';
    }
}