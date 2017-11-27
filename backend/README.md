*HERE IS THE CONFIG FILE. PUT IN IN `conf/application.conf`*
https://gist.github.com/colinwahl/2f118bdeace58c77276d77851d030f6b



*To add a new route:*
0) Figure out if the endpoint you need should go in Customer or Owner.
1) Go to `conf/routes` and follow the other examples to point a route to a controller.
2) Add the method you just used for the route to the appropriate controller.
3) Follow examples to write the controller method.
4) Follow examples to write the repository method.

This is the backend for the project.


*If you are on windows use `sbt.bat` as your SBT*

To run, use the following commands:
`./sbt run`
if that does not work, then try 
`chmod +x ./sbt`
and 
`chmod +x ./sbt-dist/bin/sbt`
and then try again.



*The Database schema is set up in `conf/evolutions/default/1.sql`*
If you would like to change it, go do it there.

*All of the "work" for queries is done in the respective 'repository'.*
I will try to figure out a good way to break up the repositories to match what they are used for.
