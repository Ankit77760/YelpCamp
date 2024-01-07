# CampGround

<p>YelpCamp is a full-stack website project where users can create and review campgrounds. In order to review or create a campground, you must have an account. </p>
<p>This project is a part of Colt Steele's web dev bootcamp course on udemy.</p>
<p>This project is being created created using Node.js, Express, MongoDB, and Bootstrap. Passport.js is used to handle authentication.</p>

<h2>Functionalities</h2>
<ul>
  <li>Everyone can view the camps and reviews without signing up or logging in.</li>
  <li>The user will have to login to edit the campground details or any comments.</li>
  <li>The user can only edit/delete the campgrounds and comments that they have added.</li>
  <li>All the data will pe persistent and is stored in the MongoDB Atlas.</li>
</ul>

## Technologies Used:

>HTML5 - markup language for creating web pages and web applications

>CSS3 - used for describing the presentation of a document written in a markup language

>Bootstrap - free and open-source front-end web framework for designing websites and web applications quickly

>DOM Manipulation - is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document

>Node.js - pen-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side

>Express.js - for building web applications and APIs and connecting middleware

>REST - REST (REpresentational State Transfer) is an architectural style for developing web services

>MongoDB - open-source cross-platform document-oriented NoSQL database program to store details like users info, campgrounds info and comments

>PassportJS - authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application

>Data Associations - associating user data with the respective campgrounds and comments using reference method

>Joi - Data Validation

>MongoCluster - Storage of Data

>EJS- templating the pages to be rendered on app.

## Screenshots
>Home
>![image](https://github.com/Ankit77760/CampGround/assets/115404574/c4415365-cae2-4e34-b135-48e6417c0b74)

 >Login & Register
>![image](https://github.com/Ankit77760/CampGround/assets/115404574/6301da87-371c-4daa-9087-5256c9a0654b)
>![image](https://github.com/Ankit77760/CampGround/assets/115404574/683b496c-2d90-4e3c-a466-bff3143cd682)

>Map
>![image](https://github.com/Ankit77760/CampGround/assets/115404574/9d7592e6-96b8-49db-ae89-e7edc7d25871)

>Show Camp Page
>Without Logging In
>![image](https://github.com/Ankit77760/CampGround/assets/115404574/dc004439-aaf7-4b77-875a-c0c257eec128)
>With Logging In
>![image](https://github.com/Ankit77760/CampGround/assets/115404574/ce2669c1-cc47-4a9a-be6e-c0ec0fa828d1)
>Campground and Review With Logged In Page By Owner
>![image](https://github.com/Ankit77760/CampGround/assets/115404574/2fafac0f-bc73-49f9-af35-077256410687)
>Campground and Review Page without Logging In
>![image](https://github.com/Ankit77760/CampGround/assets/115404574/773ae4a3-f325-4985-9d56-503655aec60e)

>New And Update Campground Page
>![image](https://github.com/Ankit77760/CampGround/assets/115404574/559132c8-d61e-4c6c-bb6c-7fc07b20d90d)
>Edit Campground Page
>![image](https://github.com/Ankit77760/CampGround/assets/115404574/3d25025a-aee9-4f92-bb37-7139c4599817)

>All Campground Page
>![image](https://github.com/Ankit77760/CampGround/assets/115404574/28c3b731-cde4-4f41-9bba-0a752600959d)

>Footer
>![image](https://github.com/Ankit77760/CampGround/assets/115404574/9bd32834-cbfd-4e07-ab99-c297d78ef8ce)

## Methods To Use
<ul> 
<li>Download The Code As Zip File and extract the file</li>
<li>Install all the dependencies using the below command and follow on the remaining bash commands</li>
>npm i bs-custom-file-input cloudinary connect-flash connect-mongo dotenv ejs ejs-mate express express-session joi method-override mongoose multer multer-storage-cloudinary passport passport-local passport-local-mongoose @mapbox/mapbox-sdk
>cd seeds
>node index.js
>cd ..
>node app.js
>Open Web Browser and use LocalHost Port 3000
</ul>
<h4>http://localhost:3000/campgrounds</h4>

## General
>.env files have been not shared due to password restriction. One can obtain by requesting it.

<h3>All Changes and recommendations are highly appreciated </h3>

## Thanks 
## Developed By Ankit Mishra



