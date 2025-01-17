package org.acme.schooltimetabling.service;

import jakarta.inject.Singleton;
import org.acme.schooltimetabling.domain.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

//https://www.eeecs.qub.ac.uk/itc2007/curriculmcourse/course_curriculm_index_files/Inputformat.htm

@Singleton
public class DatasetParser {
    // Parses the dataset and returns a complete Timetable object
    public Timetable parseDataset(String fileName) throws IOException {
        System.out.println("Trying to load file: datasets/" + fileName);

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(
                Objects.requireNonNull(getClass().getClassLoader().getResourceAsStream("datasets/" + fileName))))) {

            String name = "";
            int coursesCount = 0;
            int roomsCount = 0;
            int days = 0;
            int periodsPerDay = 0;
            int curriculaCount = 0;
            int constraintsCount = 0;

            List<Course> courses = new ArrayList<>();
            List<Room> rooms = new ArrayList<>();
            List<Curriculum> curricula = new ArrayList<>();
            List<UnavailabilityConstraint> unavailabilityConstraints = new ArrayList<>();

            String line;
            while ((line = reader.readLine()) != null) {
                line = line.trim();
                if (line.isEmpty() || line.startsWith("#")) {
                    continue;
                }

                if (line.startsWith("Name:")) {
                    name = line.split(":")[1].trim();
                } else if (line.startsWith("Courses:")) {
                    coursesCount = Integer.parseInt(line.split(":")[1].trim());
                } else if (line.startsWith("Rooms:")) {
                    roomsCount = Integer.parseInt(line.split(":")[1].trim());
                } else if (line.startsWith("Days:")) {
                    days = Integer.parseInt(line.split(":")[1].trim());
                } else if (line.startsWith("Periods_per_day:")) {
                    periodsPerDay = Integer.parseInt(line.split(":")[1].trim());
                } else if (line.startsWith("Curricula:")) {
                    curriculaCount = Integer.parseInt(line.split(":")[1].trim());
                } else if (line.startsWith("Constraints:")) {
                    constraintsCount = Integer.parseInt(line.split(":")[1].trim());
                } else if (line.equals("COURSES:")) {
                    for (int i = 0; i < coursesCount; i++) {
                        line = reader.readLine().trim();
                        String[] parts = line.split("\\s+");
                        String courseId = parts[0];
                        String teacher = parts[1];
                        int numberOfLectures = Integer.parseInt(parts[2]);
                        int minWorkingDays = Integer.parseInt(parts[3]);
                        int numberOfStudents = Integer.parseInt(parts[4]);
                        courses.add(new Course(courseId, teacher, numberOfLectures, minWorkingDays, numberOfStudents));
                    }
                } else if (line.equals("ROOMS:")) {
                    for (int i = 0; i < roomsCount; i++) {
                        line = reader.readLine().trim();
                        String[] parts = line.split("\\s+");
                        String roomId = parts[0];
                        int capacity = Integer.parseInt(parts[1]);
                        rooms.add(new Room(roomId, capacity));
                    }
                } else if (line.equals("CURRICULA:")) {
                    for (int i = 0; i < curriculaCount; i++) {
                        line = reader.readLine().trim();
                        String[] parts = line.split("\\s+");
                        String curriculumId = parts[0];
                        int numberOfCourses = Integer.parseInt(parts[1]);
                        List<String> courseIds = Arrays.asList(Arrays.copyOfRange(parts, 2, 2 + numberOfCourses));
                        curricula.add(new Curriculum(curriculumId, courseIds));
                    }
                } else if (line.equals("UNAVAILABILITY_CONSTRAINTS:")) {
                    for (int i = 0; i < constraintsCount; i++) {
                        line = reader.readLine().trim();
                        String[] parts = line.split("\\s+");
                        String courseId = parts[0];
                        int day = Integer.parseInt(parts[1]);
                        int period = Integer.parseInt(parts[2]);
                        unavailabilityConstraints.add(new UnavailabilityConstraint(courseId, day, period));
                    }
                }
            }

            // Generate timeslots
            List<Timeslot> timeslots = generateTimeslots(days, periodsPerDay);

            return new Timetable(rooms, timeslots, unavailabilityConstraints, curricula, courses);
        }
    }

    // Generates a list of Timeslots (days x timeslots)
    public List<Timeslot> generateTimeslots(int days, int timeslotsPerDay) {
        List<Timeslot> timeslots = new ArrayList<>();
        for (int day = 0; day < days; day++) {
            for (int timeslot = 0; timeslot < timeslotsPerDay; timeslot++) {
                String id = "Day" + day + "-Timeslot" + timeslot;
                timeslots.add(new Timeslot(id, day, timeslot));
            }
        }
        return timeslots;
    }
}