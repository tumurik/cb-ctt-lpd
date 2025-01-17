package org.acme.schooltimetabling.rest;

import org.acme.schooltimetabling.domain.Timetable;
import org.acme.schooltimetabling.service.DatasetParser;
import ai.timefold.solver.core.api.solver.SolverManager;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.UUID;

@Path("/timetable")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TimetableResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(TimetableResource.class);

    @Inject
    DatasetParser datasetParser;

    @Inject
    SolverManager<Timetable, String> solverManager;

    private Timetable timetable;
    private String problemId;

    /**
     * Retrieves the current timetable.
     *
     * @return The timetable as JSON, or a NOT FOUND response if no timetable is loaded.
     */
    @GET
    public Response getTimetable() {
        if (timetable == null) {
            return Response.status(Response.Status.NOT_FOUND)
                    .entity("No timetable loaded. Please load a dataset first.")
                    .build();
        }
        return Response.ok(timetable).build();
    }

    /**
     * Loads a dataset and initializes the timetable.
     *
     * @param fileName The name of the dataset file in the resource folder.
     * @return A success or error response.
     */
    @POST
    @Path("/load-dataset")
    public Response loadDataset(@QueryParam("fileName") String fileName) {
        if (fileName == null || fileName.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("File name must be provided.")
                    .build();
        }

        try {
            timetable = datasetParser.parseDataset(fileName);
            System.out.println("Initial Timetable: " + timetable);
            problemId = UUID.randomUUID().toString(); // Reset the problem ID for a new dataset
            return Response.ok("Dataset loaded successfully!").build();
        } catch (IOException e) {
            LOGGER.error("Failed to load dataset: {}", e.getMessage(), e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity("Failed to load dataset: " + e.getMessage())
                    .build();
        }
    }

    /**
     * Starts the solver to optimize the timetable.
     *
     * @return A success or error response.
     */
    @POST
    @Path("/start-solver")
    public Response startSolver() {
        if (timetable == null) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("No timetable loaded. Please load a dataset first.")
                    .build();
        }

        solverManager.solveBuilder()
                .withProblemId(problemId)
                .withProblemFinder(id -> timetable) // Provide the timetable as the problem
                .withBestSolutionConsumer(bestSolution -> timetable = bestSolution) // Update with the best solution
                .withExceptionHandler((id, exception) -> {
                    // Log the error and reset the timetable state
                    LOGGER.error("Solver failed for problemId {}: {}", id, exception.getMessage(), exception);
                    timetable = null;
                })
                .run();

        return Response.ok("Solver started with problem ID: " + problemId).build();
    }

    /**
     * Stops the solver.
     *
     * @return A success or error response.
     */
    @POST
    @Path("/stop-solver")
    public Response stopSolver() {
        if (solverManager == null) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("SolverManager is not available.")
                    .build();
        }

        try {
            solverManager.terminateEarly(problemId);
            return Response.ok("Solver stopped!").build();
        } catch (IllegalStateException e) {
            LOGGER.error("Failed to stop solver for problemId {}: {}", problemId, e.getMessage(), e);
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("Solver is not running: " + e.getMessage())
                    .build();
        }
    }

    /**
     * Clears the current timetable and resets the state.
     *
     * @return A success response.
     */
    @DELETE
    public Response clearTimetable() {
        timetable = null;
        problemId = null; // Reset the problem ID
        return Response.ok("Timetable cleared.").build();
    }
}