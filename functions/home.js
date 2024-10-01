'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/',(req,res)=>{
res.send(`
<html>
<head>
<title>The Children's Shoppe</title>
<meta></meta>
</head>
<style>
#main-nav-bar{}

.main-nav-bar-items-container{}

#main-header{}



</style>
<header id = "main-header">
<nav id = "main-nav-bar">

<span class = "main-nav-bar-items-container">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button type = "submit" id = "home-button" class = "main-nav-bar-form-button"></button>

</form>

</span>

<span class = "main-nav-bar-items-container">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button type = "submit" id = "home-button" class = "main-nav-bar-form-button"></button>

</form>
<div class = "main-nav-bar-dropdown-container">
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button">Lorem Ipsum</button></a>
<a href = ""><button class = "dropdown-button">Lorem Ipsum</button></a>
<a href = ""><button class = "dropdown-button">Lorem Ipsum</button></a>
<a href = ""><button class = "dropdown-button">Lorem Ipsum</button></a>

</ul>

</div>
</span>

<span class = "main-nav-bar-items-container">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button type = "submit" id = "home-button" class = "main-nav-bar-form-button"></button>

</form>

</span>

<span class = "main-nav-bar-items-container">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button type = "submit" id = "home-button" class = "main-nav-bar-form-button"></button>

</form>
<div class = "main-nav-bar-dropdown-container">
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button">Lorem Ipsum</button></a>
<a href = ""><button class = "dropdown-button">Lorem Ipsum</button></a>
<a href = ""><button class = "dropdown-button">Lorem Ipsum</button></a>
<a href = ""><button class = "dropdown-button">Lorem Ipsum</button></a>

</ul>

</div>
</span>

<input id = "search-bar"></input>






</nav>
</header>
<body>
<div id = "post-header-div" class = "body-div">
<div><h1 id = "main-page-heading">The Children's Shoppe</h1></div>


</div>


</body>

</html>



`)
app.use('/.netlify/functions/home',router)

module.exports.handler = serverless(app);
