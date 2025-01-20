Prerequisites:
https://maven.apache.org/download.cgi
https://www.oracle.com/java/technologies/downloads/?er=221886

To run benchmark locally:
1) git clone https://github.com/tumurik/cb-ctt-lpd.git
2) cd cb-ctt-lpd/school-timetabling
3) mvn clean install
4) mvn package exec:java


cb-stt problem model: 
https://www.eeecs.qub.ac.uk/itc2007/curriculmcourse/course_curriculm_index_files/problemmodel.htm

cb-ctt-lpd endpoints:
###
POST /timetable/load-dataset

Description:
Loads a dataset into the system.
(Available datasets: comp00.ctt, comp01.ctt, comp02.ctt, comp08.ctt.)

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

Winner of itc2007. Comapre with track 3. 
But I did not implement all soft constraints and tested only on comp01.ctt due to lack of time.
https://www.eeecs.qub.ac.uk/itc2007/winner/bestexamsolutions/itc2007_Muller.pdf
Müller's approach is a hybrid algorithm.
It initiates with Iterative Forward Search (IFS) + Conflict-based Statistics (CBS).
And balance Hill Climbing (HC), Great Deluge (GD) and Simulated Annealing (SA) to improve results. 

Results of benchmark:

Results of benchmark:
https://github.com/tumurik/cb-ctt-lpd/blob/main/scorelpd.PNG
