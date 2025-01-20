cb-ctt endpoints:
###
POST /timetable/load-dataset

Description:
Loads a dataset into the system.
(Available datasets: comp01.ctt, comp02.ctt, comp08.ctt.)

Example request:
curl -X POST "http://localhost:8080/timetable/load-dataset?fileName=comp01.ctt"
###
###
GET /timetable

Description:
Preview currently used dataset.

Example request:
curl -X GET "http://localhost:8080/timetable"
###
###
POST /timetable/start-solver

Description:
Solve loaded timetabling problem.

Example request:
curl -X POST "http://localhost:8080/timetable/start-solver"
###
###
POST /timetable/stop-solver

Description:
Stops solver if it's  running.

Example request:
curl -X POST "http://localhost:8080/timetable/stop-solver"
###