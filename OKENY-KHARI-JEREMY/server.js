//dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

//session
const expressSession = require("express-session")({
    secret: "secret",
    resave: false, //do not save their session after login
    saveUninitialized: false, //the session didnot start donot save
});
require("dotenv").config();


//import models
const flights = require("./model/flights");

// import routes
const flightRoute = require("./routes/flightRoute")

//create express app
const app = express();
const port = 4000;

//configurations
mongoose.connect(process.env.DATABASE_LOCAL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });

  mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });





//set view view engine
app.set("view engine", "pug"); // specify the view engine
app.set("views", path.join(__dirname, "views")); // specify the view directory

//middleware
app.use(express.static(path.join(__dirname, "public"))); // specify a folder for static files
app.use(express.urlencoded({ extended: true })); // helps to parse data from forms
app.use(express.json()); // helps to capture data in json

//use routes
app.use("/", flightRoute);

app.get("*", (req, res) => {
    res.send("Error! This page does not exist");
  });


  app.listen(port, () => console.log(`listening on port ${port}`));



