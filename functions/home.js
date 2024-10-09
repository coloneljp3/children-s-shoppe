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
<link rel = "stylesheet" href = "/styles.css"/>
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

function fadeIn(id,visibility,transition){
var element = document.getElementById(id);
element.style.transition = "visibility "+ transition;

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
    dropDown.style.height = '100%';
  }
  }
}
</script>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

<title>The Children's Shoppe</title>
<meta></meta>
</head>

<header id = "main-header">
<div style = "background-color:white;height:50%;width:100%"><img src = ""></img></div>
<nav id = "main-nav-bar">
<div id = "main-nav-bar-top-half"></div>
<div id = "main-nav-bar-bottom-half">
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

<span class = "main-nav-bar-items-container">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-5')" onmouseleave = "dropDown('dropdown-button-4')" type = "submit" id = "home-button" class = "main-nav-bar-form-button">Lorem Ipsum</button>

</form>
<div class = "main-nav-bar-dropdown-container">
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-5">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-5">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-5">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-5">Lorem Ipsum</button></a><br>

</ul>

</div>
</span>

<span class = "main-nav-bar-items-container">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-6')" onmouseleave = "dropDown('dropdown-button-6')" type = "submit" id = "home-button" class = "main-nav-bar-form-button">Lorem Ipsum</button>

</form>
<div class = "main-nav-bar-dropdown-container">
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-6">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-6">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-6">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-6">Lorem Ipsum</button></a><br>

</ul>

</div>
</span>

<input id = "search-bar" type = "search"/>



</div>


</nav>
</header>

<body>

<div id = "post-header-body-div-1" class = "body-div">


<h1 id = "main-page-heading">The Children's Shoppe</h1>



</div>

<div id = "post-header-body-div-2" class = "body-div">
<div class = "product-images-container"><img class = "product-images"></img><h2>Product Image</h2><p>Lorem Ipsum</p></div>
<div class = "product-images-container"><img class = "product-images"></img><h2>Product Image</h2><p>Lorem Ipsum</p></div>
<div class = "product-images-container"><img class = "product-images"></img><h2>Product Image</h2><p>Lorem Ipsum</p></div>
<div class = "product-images-container"><img class = "product-images"></img><h2>Product Image</h2><p>Lorem Ipsum</p></div>

</div>

</body>


<footer style = "position:relative">
<div id = "footer-half-1">


<span class = "main-nav-bar-items-container">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-7')" onmouseleave = "dropDown('dropdown-button-7')" type = "submit" class = "main-nav-bar-form-button">Contact</button>

</form>
<div class = "main-nav-bar-dropdown-container">
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-7">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-7">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-7">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-7">Lorem Ipsum</button></a><br>

</ul>

</div>
</span>


<span class = "main-nav-bar-items-container">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-8')" onmouseleave = "dropDown('dropdown-button-8')" type = "submit"  class = "main-nav-bar-form-button">Contact</button>

</form>
<div class = "main-nav-bar-dropdown-container">
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-8">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-8">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-8">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-8">Lorem Ipsum</button></a><br>

</ul>

</div>
</span>

<span class = "main-nav-bar-items-container">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-9')" onmouseleave = "dropDown('dropdown-button-9')" type = "submit"  class = "main-nav-bar-form-button">Contact</button>

</form>
<div class = "main-nav-bar-dropdown-container">
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-9">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-9">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-9">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-9">Lorem Ipsum</button></a><br>

</ul>

</div>
</span>

<span class = "main-nav-bar-items-container">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-10')" onmouseleave = "dropDown('dropdown-button-10')" type = "submit"  class = "main-nav-bar-form-button">Contact</button>

</form>
<div class = "main-nav-bar-dropdown-container">
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-10">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-10">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-10">Lorem Ipsum</button></a><br>
<a href = ""><button class = "dropdown-button-10">Lorem Ipsum</button></a><br>

</ul>

</div>
</span>




</div>

<div id = "footer-half-2">
</div>
</footer>
</html>



`);})
app.use('/.netlify/functions/home',router)

module.exports.handler = serverless(app);
