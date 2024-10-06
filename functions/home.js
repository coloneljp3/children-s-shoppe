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
<link rel = "stylesheet" href = "/styles.css"></link>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<script src = "/functions.js" type = "text/javascript">
function colorChange(id, color_1, color_2){
var element = document.getElementById(id);

  if(element.style.color == color_1){

    element.style.color = color_2;
  }
  else{
element.style.color = color_1;
    
  }
};

function backColorChange(id, color_1,color_2){
  var element = document.getElementById(id);
   if(element.style.backgroundColor == color_1){

    element.style.backgroundColor = color_2;
  }
  else{
element.style.backgroundColor = color_1;
    
  }
  
};

function fadeIn(id,visibility){
var element = document.getElementById(id);

  if(element.style.visiblity == "hidden")
  {element.style.visibility = "visible"}

  else{element.style.visiblity == "hidden"};
};

function borderBottomAppear(id, color_1, color_2){
  var elem = document.getElementById(id);
if(elem.style.borderBottomColor == color_1){
elem.style.borderBottomColor = color_2;}else{elem.style.borderBottomColor = color_1;}}

function dropDown(classname){
var dropDown = document.getElementsByClassName(classname);
for(let i of dropDown){
  if(dropDown.style.height = '100%'){
dropDown.style.height = '0px';    
}
  else{
    dropDown.style.height = 100%;
  }
  }
}
</script>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

<title>The Children's Shoppe</title>
<meta></meta>
</head>
<style>
#main-nav-bar{}

.main-nav-bar-items-container{}

#main-header{}



</style>
<header id = "main-header">
<div style = "height:50%;width:100%"><img src = ""></img></div>
<nav id = "main-nav-bar">

<span class = "main-nav-bar-items-container">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-1')" onmouseleave = "dropDown('dropdown-button-1')" type = "submit" id = "contact-button" class = "main-nav-bar-form-button">Contact</button>

</form>
<div class = "main-nav-bar-dropdown-container">
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-1">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-1">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-1">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-1">Lorem Ipsum</button></a><br>

</ul>

</div>
</span>

<span class = "main-nav-bar-items-container">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-2')" onmouseleave = "dropDown('dropdown-button-2')" type = "submit" id = "products-button" class = "main-nav-bar-form-button">Products</button>

</form>
<div class = "main-nav-bar-dropdown-container">
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-2">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-2">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-2">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-2">Lorem Ipsum</button></a><br>

</ul>

</div>
</span>

<span class = "main-nav-bar-items-container">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-3')" onmouseleave = "dropDown('dropdown-button-3')" type = "submit" id = "contac-button" class = "main-nav-bar-form-button">Lorem Ipsum</button>

</form>
<div class = "main-nav-bar-dropdown-container">
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-3">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-3">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-3">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-3">Lorem Ipsum</button></a><br>

</ul>

</div>

</span>

<span class = "main-nav-bar-items-container">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-4')" onmouseleave = "dropDown('dropdown-button-4')" type = "submit" id = "home-button" class = "main-nav-bar-form-button">Lorem Ipsum</button>

</form>
<div class = "main-nav-bar-dropdown-container">
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-4">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-4">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-4">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-4">Lorem Ipsum</button></a><br>

</ul>

</div>
</span>

<input id = "search-bar" type = "search"/>






</nav>
</header>

<body>

<div id = "post-header-body-div-1" class = "body-div">


<h1 id = "main-page-heading">The Children's Shoppe</h1>



</div>

<div id = "post-header-body-div-2" class = "body-div">
<span><img class = "product-images"></img><h2>Lorem Ipsum</h2><p>Lorem Ipsum</p></span>
<span><img class = "product-images"></img><h2>Lorem Ipsum</h2><p>Lorem Ipsum</p></span>
<span><img class = "product-images"></img><h2>Lorem Ipsum</h2><p>Lorem Ipsum</p></span>
<span><img class = "product-images"></img><h2>Lorem Ipsum</h2><p>Lorem Ipsum</p></span>

</div>

</body>
<footer>
<div id = "footer-half-1">
<span></span>
<span></span>
</div>

<div id = "footer-half-2">
</div>
</footer>
</html>



`);})
app.use('/.netlify/functions/home',router)

module.exports.handler = serverless(app);
