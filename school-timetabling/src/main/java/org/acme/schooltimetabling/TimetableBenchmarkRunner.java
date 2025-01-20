package org.acme.schooltimetabling;

import ai.timefold.solver.core.api.solver.Solver;
import ai.timefold.solver.core.api.solver.SolverFactory;
import ai.timefold.solver.benchmark.api.PlannerBenchmark;
import ai.timefold.solver.benchmark.api.PlannerBenchmarkFactory;
import org.acme.schooltimetabling.domain.Timetable;
import org.acme.schooltimetabling.service.DatasetParser;

import java.time.Duration;
import java.time.Instant;
import java.util.logging.Level;
import java.util.logging.Logger;

public class TimetableBenchmarkRunner {

    private static final Logger LOGGER = Logger.getLogger(TimetableBenchmarkRunner.class.getName());

    public static void main(String[] args) {
        try {
            LOGGER.log(Level.INFO, "Starting Timetable Benchmark Runner...");

            // Load BenchmarkConfig.xml
            PlannerBenchmarkFactory benchmarkFactory = PlannerBenchmarkFactory.createFromXmlResource("BenchmarkConfig.xml");
            PlannerBenchmark benchmark = benchmarkFactory.buildPlannerBenchmark();
            benchmark.benchmarkAndShowReportInBrowser();

            // Example Dataset
//            DatasetParser datasetParser = new DatasetParser();
//            Timetable problem = datasetParser.parseDataset("datasets/comp01.ctt");
//            runBenchmark(SolverFactory.createFromXmlResource("solverConfig.xml"), problem);

            LOGGER.log(Level.INFO, "Benchmarking completed successfully.");
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "An error occurred during benchmarking", e);
        }
    }

    /**
     * Runs a single solver benchmark with detailed output.
     *
     * @param solverFactory The solver factory.
     * @param timetable     The problem instance.
     */
    private static void runBenchmark(SolverFactory<Timetable> solverFactory, Timetable timetable) {
        System.out.println("Running example benchmark");

        Solver<Timetable> solver = solverFactory.buildSolver();

        Instant start = Instant.now();
        Timetable solvedTimetable = solver.solve(timetable);
        Instant end = Instant.now();

        System.out.println("Final Score: " + solvedTimetable.getScore());
        System.out.println("Execution Time: " + Duration.between(start, end).toMillis() + " ms");

        validateSolution(solvedTimetable);
    }

    /**
     * Validates the solution after solving.
     *
     * @param timetable The solved timetable.
     */
    private static void validateSolution(Timetable timetable) {
        if (timetable == null || timetable.getScore() == null) {
            System.err.println("Invalid solution: Timetable or score is null.");
        } else {
            System.out.println("Solution validation passed.");
        }
    }
}
