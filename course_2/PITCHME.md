## Reading list
In this course we will create an Express [Rest API](https://searchmicroservices.techtarget.com/definition/RESTful-API) for the backend of our own [9gag](https://9gag.com/) clone. We will make use of [HTTP methods](https://spring.io/understanding/REST).

We will also use some basic SQL: [SQL select](https://www.w3schools.com/sql/sql_select.asp), [SQL select where clause](https://www.w3schools.com/sql/sql_where.asp), [SQL update](https://www.w3schools.com/sql/sql_update.asp)

//Please read all the links and try some SQL exercises from the w3school links
---
Today we will build [9gag.com](https://9gag.com/)
---
Where do we start?

Let's break it down
---
We will have to get the jokes from somewhere

We will have to post the jokes to somewhere

Where is somewhere?
---
The database!
---
![database, server, client](http://afterhoursprog.wpengine.com/wp-content/uploads/2014/09/webFlowWithDatabase.gif)
---
Let's have a look at the database.
Go to [www.phpmyadmin.co](http://www.phpmyadmin.co)
```
server: sql7.freemysqlhosting.net
Username: sql7252233
Password: DtwyYW71zK
```
---
Let's setup the server
```
mkdir server
cd server
npm init -y
npm install express --save
npm install nodemon --save-dev
```
create file: index.js

add following statement in the script tag of package.json
```
"start": "nodemon index.js",
```
