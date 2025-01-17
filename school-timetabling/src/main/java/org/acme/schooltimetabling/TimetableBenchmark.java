package org.acme.schooltimetabling;

import ai.timefold.solver.core.api.solver.Solver;
import ai.timefold.solver.core.api.solver.SolverFactory;
import ai.timefold.solver.core.api.score.Score;
import org.acme.schooltimetabling.domain.Timetable;
import java.time.Duration;
import java.time.Instant;
import java.util.List;

public class TimetableBenchmark {

    public static void main(String[] args) {
        // Load solver configurations
        SolverFactory<Timetable> solverFactory = SolverFactory.createFromXmlResource("solver/timetableSolverConfig.xml");

        // Create/load sample Timetable
        Timetable timetable = createSampleTimetable();

        // Benchmark configurations
        runBenchmark(solverFactory, timetable, "Default Config");
    }

    private static void runBenchmark(SolverFactory<Timetable> solverFactory, Timetable timetable, String configName) {
        System.out.println("Running benchmark for: " + configName);

        Solver<Timetable> solver = solverFactory.buildSolver();

        Instant start = Instant.now();
        Timetable solvedTimetable = solver.solve(timetable);
        Instant end = Instant.now();

        Score score = solvedTimetable.getScore();
        System.out.println("Configuration: " + configName);
        System.out.println("Final Score: " + score);
        System.out.println("Execution Time: " + Duration.between(start, end).toMillis() + " ms");

        validateSolution(solvedTimetable);
    }

    private static void validateSolution(Timetable timetable) {
        // Example validation logic
        System.out.println("Validating solution...");
    }

    private static Timetable createSampleTimetable() {
        return new Timetable(/* initialize with data */);
    }

    private static void runLateAcceptanceBenchmark(SolverFactory<Timetable> solverFactory, Timetable timetable) {
        System.out.println("Running Late Acceptance benchmark...");
        // SolverConfig config = solverFactory.getSolverConfig().copyConfig();
    }
}
