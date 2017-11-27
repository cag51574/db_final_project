*HERE IS THE CONFIG FILE. PUT IN IN `conf/application.conf`*
https://gist.github.com/colinwahl/2f118bdeace58c77276d77851d030f6b


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
