# db_final_project

## Due Date
11/30/17

## Group Members

Cameron Garratt

Emma Fick

Nicolas Burgess

Colin Wahl

Vivek Patel


## Dr. Miller didn't suggest any changes to our presentation, so we have not added an updated presentation file.

## Running the project

To run the front end:
0) Install NPM and Node.
1) Navigate to `./frontend`.
2) Run `npm install`.
3) Run `npm start` to start the local frontend server.  It will be at `localhost:3000`.
4) Open `localhost:3000`.

To run the back end:
0) Create a postgresql database called `db_final_project`.
1) Navigate to `./backend`.
3) Edit `./backend/conf/application.conf` to use your db username, password, and db name. This is found near the bottom of said file.
4) Run `sbt run` or `sbt.bat run` to run the application. 
5) Navigate to `localhost:9000` and make sure the database is connected.  Run the database evolutions.
6) Now the backend should be running.  Now go back to `localhost:3000` and use the frontend to interact with the app.
