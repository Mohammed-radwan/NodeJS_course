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
Clone the [NodeJS course](https://github.com/HackYourFutureBelgium/NodeJS_course)
```
git clone https://github.com/HackYourFutureBelgium/NodeJS_course.git
cd NodeJS_course/course_2/9gag/client
npm install
npm start
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
---
let's do the regular setup we learned last week
---
install the [MySQL npm package](https://www.npmjs.com/package/mysql)
---
let's connect to the database.

Create a file named: connection.js and follow these [instructions](https://www.npmjs.com/package/mysql#introduction)
---
Let's build our first get route
```
route path: /get/jokes
callback: [
  {
      id: 1,
      title: "",
      image_location: "",
      up_votes: 0,
      down_votes: 0
      upload_time
  },
  {
    ...
  },
  ...
]
ordered by "upload_time"
```
---
Let's build our first post route to upvote posts
```
route path: /update/joke/upvote
variables: jokeID
callback: {
  status: "succes",
  message: "joke upvoted"
}
```
---
