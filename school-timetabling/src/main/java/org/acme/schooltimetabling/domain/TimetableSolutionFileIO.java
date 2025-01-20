package org.acme.schooltimetabling.domain;

import ai.timefold.solver.persistence.common.api.domain.solution.SolutionFileIO;
import org.acme.schooltimetabling.service.DatasetParser;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class TimetableSolutionFileIO implements SolutionFileIO<Timetable> {

    private final DatasetParser datasetParser;

    public TimetableSolutionFileIO() {
        this.datasetParser = new DatasetParser();
    }

    @Override
    public Timetable read(File inputSolutionFile) {
        try {
            return datasetParser.parseDataset(inputSolutionFile.getName());
        } catch (IOException e) {
            throw new IllegalArgumentException("Failed to read inputSolutionFile (" + inputSolutionFile + ").", e);
        }
    }

    @Override
    public void write(Timetable timetable, File outputSolutionFile) {
        // output: <CourseID> <RoomID> <Day> <Day_Period>
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputSolutionFile))) {
            for (Lecture lecture : timetable.getLectureList()) {

                String courseId = lecture.getCourse().getCourseId();

                String roomId = (lecture.getRoom() == null) ? "UnassignedRoom" : lecture.getRoom().getRoomId();
                Integer day = (lecture.getDay() == null) ? -1 : lecture.getDay();
                Integer period = (lecture.getPeriod() == null) ? -1 : lecture.getPeriod();

                if (lecture.getRoom() != null && lecture.getDay() != null && lecture.getPeriod() != null) {
                    writer.write(courseId + " " + roomId + " " + day + " " + period);
                    writer.newLine();
                }
            }
        } catch (IOException e) {
            throw new IllegalArgumentException("Failed to write outputSolutionFile ("
                    + outputSolutionFile + ").", e);
        }
    }

    @Override
    public String getInputFileExtension() {
        return "ctt";
    }

    @Override
    public String getOutputFileExtension() {
        return "ctt";
    }
}