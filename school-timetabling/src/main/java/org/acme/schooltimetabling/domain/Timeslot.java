package org.acme.schooltimetabling.domain;

import ai.timefold.solver.core.api.domain.lookup.PlanningId;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@JsonIdentityInfo(scope = Timeslot.class, generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Timeslot {

    @PlanningId
    private String id;

    private int day; // example: 0 = Monday, 1 = Tuesday
    private int timeslot; // example:  0 = first timeslot

    // Constructors
    public Timeslot() {
    }

    public Timeslot(String id, int day, int timeslot) {
        this.id = id;
        this.day = day;
        this.timeslot = timeslot;
    }

    @Override
    public String toString() {
        return "Day " + day + ", Timeslot " + timeslot;
    }


    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getTimeslot() {
        return timeslot;
    }

    public void setTimeslot(int timeslot) {
        this.timeslot = timeslot;
    }
}