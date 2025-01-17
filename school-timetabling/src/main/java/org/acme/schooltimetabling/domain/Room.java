package org.acme.schooltimetabling.domain;

import ai.timefold.solver.core.api.domain.lookup.PlanningId;

public class Room {

    @PlanningId
    private String id;
    private int capacity;

    // Constructors
    public Room() {
    }

    public Room(String id, int capacity) {
        this.id = id;
        this.capacity = capacity;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    @Override
    public String toString() {
        return "Room{" +
                "id='" + id + '\'' +
                ", capacity=" + capacity +
                '}';
    }
}