# Express.JS

In this repo you will find the project developed during the Express.JS course of [Platzi](https://platzi.com/clases/express-js/).

## Table of contents

* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Usage](#usage)
* [Extras](#extras)

## General info

The goal of the course was to build a backend application using Node.JS and Express.JS. For the views, I've used [Pug.JS](https://pugjs.org/api/getting-started.html). The application I've developed during the course is in the *ecommerce* folder, the other folders contain my personal practice during the course. 

## Technologies

* [Node.js](https://nodejs.org/es/docs/)
* [Express.js](https://expressjs.com/es/4x/api.html)
* [MongoDB](https://docs.mongodb.com/manual/tutorial/)
* [Passport](http://www.passportjs.org/docs/)
* [JWT](https://jwt.io/introduction)

## Setup

After forking and cloning this repo, you'll need to run the commands
```
cd ecommerce
npm run install
```

to install all dependencies. Make sure you're placed in the ecommerce directory.

Before you can start trying out the application, you need to establish your own environment variables in a *.env* file, which is placed in the *.gitignore* file. 

```
const config = {
      dbUser: process.env.DB_USER,
      dbPassword: process.env.DB_PASS,
      dbHost: process.env.DB_HOST,
      dbName: process.env.DB_NAME,
}
```

As an example, you can find the settings for this in the *config.js* file in the root of the project. You'll need to signup for a free [MongoDb Atlas](https://www.mongodb.com/es/cloud/atlas) account and crete a cluster if you want to see how the application is working.

## Usage 

```
"scripts": {
    "start": "node index",
    "build": "cross-env NODE_ENV=production cd public/assets && cleancss -o main.min.css main.css",
    "dev": "nodemon index",
    "dev:inspect": "nodemon --inspect index",
    "dev:debug": "set DEBUG=express:*,app:* & npm run dev",
    "debug": "set DEBUG=express:*,app:* & npm run start",
    "test": "mocha --exit",
    "test:cover": "nyc npm run test"
}

```
In the *package.json* of the ecommerce directory you can find a series of scripts, which you can run with the command:

`npm run [script to run]`

If you want to see how it looks on your browser, you can run the command `npm run dev`. TO be able to check all the functionality of the application, you'll need to use an API testing tool. In this case, I've used [Insomnia](https://insomnia.rest/). **DON'T** forget to inject your own data, so you can see how it's working.

## Extras

* [Mocha](https://mochajs.org/)
  
  I've used this testing framework to check that the routes and services of my application are working. If you want to run the tests, you need to run the command `npm t` 

* [Sentry](https://docs.sentry.io/platforms/node/)

  You'll need to signup if you want to be able to keep track of the errors your application may have. If you do so, **DON'T** forget to add your credentials in the *.env* file you have to add to keep your credentials safe. 

  Have fun! ;) 
