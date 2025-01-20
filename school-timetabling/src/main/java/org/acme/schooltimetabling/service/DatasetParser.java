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
            Map<String, Course> courseIdMap = new HashMap<>(); // to reference id later

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
                        Course c = new Course(courseId, teacher, numberOfLectures, minWorkingDays, numberOfStudents);
                        courses.add(c);
                        courseIdMap.put(courseId, c);
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
                        int numberOfCoursesInCurr = Integer.parseInt(parts[1]);
                        // Next n items are course id
                        List<String> courseIds = Arrays.asList(Arrays.copyOfRange(parts, 2, 2 + numberOfCoursesInCurr));
                        List<Course> memberCourses = new ArrayList<>(numberOfCoursesInCurr);
                        for (String cid : courseIds) {
                            if (!courseIdMap.containsKey(cid)) {
                                throw new IllegalStateException("Unknown courseId in curricula: " + cid);
                            }
                            memberCourses.add(courseIdMap.get(cid));
                        }
                        Curriculum curriculum = new Curriculum(curriculumId, memberCourses);
                        curricula.add(curriculum);
                    }
                } else if (line.equals("UNAVAILABILITY_CONSTRAINTS:")) {
                    for (int i = 0; i < constraintsCount; i++) {
                        line = reader.readLine().trim();
                        String[] parts = line.split("\\s+");
                        String courseId = parts[0];
                        int day = Integer.parseInt(parts[1]);
                        int period = Integer.parseInt(parts[2]);
                        if (!courseIdMap.containsKey(courseId)) {
                            throw new IllegalStateException("Unknown courseId in constraints: " + courseId);
                        }
                        Course c = courseIdMap.get(courseId);
                        unavailabilityConstraints.add(new UnavailabilityConstraint(c, day, period));
                    }
                }
            } // end reading file

            // Create planning entities for lectures
            List<Lecture> lectureList = new ArrayList<>();
            for (Course c : courses) {
                List<Curriculum> courseCurriculum = new ArrayList<>();
                for (Curriculum curriculum : curricula) {
                    if (curriculum.getMemberCourses().contains(c)) {
                        courseCurriculum.add(curriculum);
                    }
                }

                // add lectures with its curriculum
                for (int i = 0; i < c.getNumberOfLectures(); i++) {
                    String uniqueLectureId = c.getCourseId() + "_" + i;
                    Lecture lecture = new Lecture(uniqueLectureId,c,courseCurriculum);
                    lectureList.add(lecture);
                }
            }

            // add dayRange and periodRange
            List<Integer> dayRange = new ArrayList<>();
            for (int d = 0; d < days; d++) {
                dayRange.add(d);
            }
            List<Integer> periodRange = new ArrayList<>();
            for (int p = 0; p < periodsPerDay; p++) {
                periodRange.add(p);
            }

            Timetable solution = new Timetable(
                    courses,
                    rooms,
                    curricula,
                    unavailabilityConstraints,
                    lectureList,
                    dayRange,
                    periodRange
            );

            return solution;
        }
    }
}