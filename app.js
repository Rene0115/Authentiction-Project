//jshint esversion:6
const express = require("express");
const bodyParser = requiure("body-parser"); 
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set ("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));










app.listen(3000,function(){
    console.log("listening on port 3000"); 
});