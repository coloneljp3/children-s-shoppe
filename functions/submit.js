'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
const nodemailer = require('nodemailer')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));



app.use('/',(req,res)=>{
let mail = nodemailer.createTransport({
	service:'gmail',
	host:'smtp.gmail.com',
	port:993,
	secure:false,
	auth:{
		user:'jpbreaux225@gmail.com',
		pass:'FatBoi23'
	}})

let mailSend = mail.sendMail({
from: req.body.sender,
to: 'hephtymail@gmail.com',
subject:"Children's Shoppe Website Mail",
text:req.body.message})

try{
	mailSend;
	res.send(`
<html>
<head>
<link rel = "stylesheet" href = "/styles.css"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<script src = "/functions.js" type = "text/javascript">
</script>

<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
<meta charset = "utf-8">
<meta http-equiv = "X-UA-Compatible" content = "IE=edge,chrome=1">
<meta name="author" content = "The Children's Shoppe">
<meta name = "description" content = "The Children's Shoppe is the best children's toy, clothing, and furniture store in Ruston, Louisiana.">
<meta name = "generator" content = "The Children's Shoppe">
<title>The Childen's Shoppe Email Submission</title>
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&amp;family=Raleway:ital,wght@1,200&amp;display=swap" rel="stylesheet">
</head>

<header id="main-header">
<div style="background-color:#e6eab7;height:50%;width:100%">

<svg style="height:50px;width:40px;z-index:1;position:fixed;left:15px;display:inline-block" onmouseover="menuStat('menu-bar')">

<polyline stroke="green" stroke-width="4" points="0 10 40 10"></polyline>
<polyline stroke="green" stroke-width="4" points="0 20 40 20"></polyline>
<polyline stroke="green" stroke-width="4" points="0 30 40 30"></polyline>

</svg>

<div id="menu-bar" onmouseleave="menuStat('menu-bar')">
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">About Us</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Products</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Careers</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Specials</button></a>
<a href="" class="menu-bar-options"><button type="submit" class="menu-bar-options">Create Account/Login</button></a>


</div>
 <img style="height:100px;width:100px" src="/main_logo.jpg">

<nav id="main-nav-bar">
<div id="main-nav-bar-top-half">
<br>

<script>
window.onload = (event) =>{
document.getElementById('search').style.width = '350px';

}


window.onclick = (event) =>{
document.getElementById('options').innerHTML = '';
var menu = document.getElementById('menu-bar') 
menu.style.width = "0px";
menu.style.height = "0px";
menu.style.fontSize = "0px"
var specialOffers = document.getElementById('special-offers');specialOffers.style.visibility = hidden;
}
  window.onload = (event) =>{
document.getElementById('search').style.width = '350px';
}
window.onclick = (event) =>{
document.getElementById('options').innerHTML = '';
}
    
var search_list = {
"CLOTHES":"/products",
"SHIRTS":"/products",
"PANTS":"/products", 
"TOPS":"/products",
"BOTTOMS":"/products",
"HATS":"/products",
"TOYS":"/products",
"SWEATSHIRTS":"/products",
"HOME":"/home",
"CAREERS AND HIRING":"/hiring",
"PRODUCTS":"/products",
"FURNITURE":"/products"

        }
function searchReq(){
  document.getElementById('options').innerHTML = '';
var val = document.getElementById('search').value;
var list = Object.keys(search_list);

for(let i of list){

if(i.includes(val.toUpperCase())){
    var elem = document.createElement('div');
    var a = document.createElement('a');
    var but = document.createElement('button')
    
    a.className = 'search_op';
    elem.className = 'search_op';
but.style.fontFamily = 'Raleway'
but.style.color = "white";
but.style.borderColor = "rgb(145 151 81)"
but.style.backgroundColor = "rgb(145 151 81)";
but.style.borderRadius = "10px"
but.style.fontWeight = "bold";
but.style.margin = "0px";
but.style.display = "block"
but.style.height = "50px";
but.style.width= "275px";
a.style.position = "absolute"
    elem.style.visibility = "visible";
    a.style.visibility = "visible";
    elem.style.height = "50px";
    a.style.height = "50px" 
    a.href = list[i];
	a.append(but)
    but.append(i);

    elem.appendChild(a);
    document.getElementById('options').append(elem);


}



}

}
</script>
<style>
:hover:-moz-placeholder{
    color:rgba(0, 0, 120, 0.8)
    
  } 
  
  :hover::-webkit-input-placeholder { 
    color:rgba(0, 0, 120, 0.8)}
  
  :hover:-ms-input-placeholder { 
    color:rgba(0, 0, 120, 0.8)}
  
  :hover::-moz-placeholder{ 
    color:rgba(0, 0, 120, 0.8)}
  
  
  
  
a{
text-decoration:none
}

	#options{position:absolute;z-index:1;width:50%;margin:auto;}
#search{
border-radius:25px;
font-family:Cormorant Garamond;
width:0px;
border-style:solid;
border-color:#a3b8c8;
display:inline-block;
height:50px;
text-align:center;
border-color:white;
transition:width 1s;
border-style:solid}
</style>
  
<svg id="search_icon" onclick="

var width = document.getElementById('search');
if(width.style.width == '0px'){
width.style.width = '350px';
}
else{
width.style.width = '0px'}


" style="z-index:1;width:30px;height:20px;display:inline-block;color:green">
<circle cx="8" cy="8" stroke-width="3" stroke="green" fill="none" r="6"></circle>
<polyline points="12 12 20 20 " stroke-width="3" stroke="green" fill="none"></polyline>
</svg>
<input placeholder="Search for info about The Children's Shoppe" onkeyup="searchReq()" id="search" type="search" style="width: 350px;">

<div style="position:relative"> 
    
<div id="options"></div>
<div id="precursor"></div>
</div><br>
</div>
<br>

<div id="main-nav-bar-bottom-half">


<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-1')">

<form action="/home" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-1')" type="submit" id="contact-button" class="main-nav-bar-form-button">Contact</button>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown" onmouseenter="dropDown('dropdown-button-1')">
<button type="submit" class="dropdown-button-1">Owner  </button>
<form action="/home" method="POST"><button type="submit" class="dropdown-button-1">Staff  </button></form>
<form action="/home" method="POST"><button type="submit" class="dropdown-button-1">Locations  </button></form>
<form action="/home" method="POST"><button type="submit" class="dropdown-button-1">FAQs  </button></form>

</div>

</div></form>


</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-2')">

<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-2')" type="submit" id="products-button" class="main-nav-bar-form-button">Products</button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-2">Tops  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-2">Bottoms  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-2">Toys  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-2">Furniture  </button></form>

</div>

</div>
</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-3')">

<form action="/products" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-3')" type="submit" id="contac-button" class="main-nav-bar-form-button">Shirts  </button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-3">Cost  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-3">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-3">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-3">Brands  </button></form>

</div>

</div>

</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-4')">

<form action="/products" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-4')" type="submit" id="home-button" class="main-nav-bar-form-button">Pants  </button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-4">Cost  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-4">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-4">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-4">Brands  </button></form>


</div>

</div>
</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-5')">

<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-5')" type="submit" id="home-button" class="main-nav-bar-form-button">Shorts  </button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-5">Cost  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-5">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-5">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-5">Brands  </button></form>

</div>

</div>
</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-6')">

<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-6')" type="submit" id="home-button" class="main-nav-bar-form-button">Skirts  </button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-6">Costs</button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-6">Designs </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-6">Sizes </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-6">Brands </button></form>

</div>

</div>
</span>




</div>



</nav>

</div></header>
<h1 style = "width:50%;margin:auto;font-family:Raleway;">Your email has been submitted!</h1>
<footer style="height:700px;position:relative;background-color:#e6eab7;position:relative;background-color:#e6eab7;">
<div style="width:49%;color:white;background-color:#e6eab7;display:inline-block">
<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-7')">

<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-7')" type="submit" class="main-nav-bar-form-button">Sweaters</button>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<a href="/products"><button class="dropdown-button-7">Cost  </button></a>
<a href="/products"><button class="dropdown-button-7">Designs  </button></a>
<a href="/products"><button class="dropdown-button-7">Sizes  </button></a>
<a href="/products"><button class="dropdown-button-7">Brands  </button></a>

</div>

</div>
</form>

</span>


<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-8')">
<form action="/products" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-8')" type="submit" class="main-nav-bar-form-button">Coats</button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<a href="/products"><button class="dropdown-button-8">Cost  </button></a>
<a href="/products"><button class="dropdown-button-8">Designs  </button></a>
<a href="/products"><button class="dropdown-button-8">Sizes  </button></a>
<a href="/products"><button class="dropdown-button-8">Brands  </button></a>

</div>

</div>


</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-9')">
<form action="/products" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-10')" type="submit" class="main-nav-bar-form-button">Suits</button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<a href="/products"><button class="dropdown-button-9">Cost  </button></a>
<a href="/products"><button class="dropdown-button-9">Designs  </button></a>
<a href="/products"><button class="dropdown-button-9">Sizes  </button></a>
<a href="/products"><button class="dropdown-button-9">Brands  </button></a>

</div>

</div>


</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-10')">
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<a href="/products"><button class="dropdown-button-10">Cost  </button></a>
<a href="/products"><button class="dropdown-button-10">Designs  </button></a>
<a href="/products"><button class="dropdown-button-10">Sizes  </button></a>
<a href="/products"><button class="dropdown-button-10">Brands  </button></a>

</div>

</div>
<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-10')" type="submit" class="main-nav-bar-form-button">Dresses</button>

</form>

</span>




</div>


<div>
<div style="color:white;background-color:black;font-family:helvetica" id="contact-footer-div">
<h3>The Children's Shoppe</h3>
<div id="map"></div>
<p><b>109 N Trenton St<br>
Ruston, LA 71270</b></p>
<p><b>(318)-251-9599</b></p>


</div>
<div id="messaging-feature">
<h4 style="text-align:center">Have a Question? Contact Us.</h4>
<form method="POST" id="email" action="/submit">
<h4 style="text-align:center">Type your full name in the box below.</h4>
<textarea id="sender" name="sender"></textarea>
<h4 style="text-align:center">Type your message in the box below.</h4>
<textarea id="message" name="message"></textarea>
<button id="message-button" type="submit">Send</button>
</form>

</div>

<p style="display:inline-block;text-align:center;width:100%;font-family:Cormorant Garamond;color:#a1ad20;background-color:#e6eab7">Hephty Solutions | All Rights Reserved</p>
<div style="color:#a1ad20;background-color:#e6eab7;display:block">
<h4 style="text-align:center">Follow Us!</h4>
<div style="margin: auto;width: 40%;">
<div class="social-media-image-container"><a href=""><img class="social-media-image" width="50" height="50" src="https://img.icons8.com/ios/50/facebook-new.png" alt="facebook-new">
</a></div>
<div class="social-media-image-container"><a href=""><img src="/twitter.png" class="social-media-image"></a></div>
<div class="social-media-image-container"><a href=""><img src="https://pluspng.com/img-png/instagram-png-instagram-icon-1600.png" class="social-media-image"></a></div></div>
</div>
</div>
</footer>
</html>



`)
	
}
	catch{
		res.send(
			`
<html>
<head>
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&amp;family=Raleway:ital,wght@1,200&amp;display=swap" rel="stylesheet">
<link rel = "stylesheet" href = "/styles.css"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<script src = "/functions.js" type = "text/javascript">
</script>

<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
<meta charset = "utf-8">
<meta http-equiv = "X-UA-Compatible" content = "IE=edge,chrome=1">
<meta name="author" content = "The Children's Shoppe">
<meta name = "description" content = "The Children's Shoppe is the best children's toy, clothing, and furniture store in Ruston, Louisiana.">
<meta name = "generator" content = "The Children's Shoppe">
<title>The Children's Shoppe</title>
</head>

<header id = "main-header">
<div style = "background-color:#e6eab7;height:50%;width:100%">

<img style = "height:100%" src = "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/326706496_3310115642633019_2159792958870315398_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mQtcmYTH5HIQ7kNvgGbkPeO&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AmqjLffJszvv4kLMv8bD48C&oh=00_AYBA6nn84jTfbhrh8HRPvdmTRpsK68ohphqmSMMRGO48gQ&oe=672CD2EB"></img>

</div>
<nav id = "main-nav-bar">
<div id = "main-nav-bar-top-half">
<br>

<script>
window.onload = (event) =>{
document.getElementById('search').style.width = '350px';
document.getElementById('main-page-heading').style.width = '100%';
}
window.onclick = (event) =>{
document.getElementById('options').innerHTML = '';
}
    
var search_list = {
"CLOTHES":"",
"SHIRTS":"",
"PANTS":"", 
"TOPS":"",
"BOTTOMS":"",
"HATS":"",
"TOYS":"",
"SWEATSHIRTS":""

        }
function searchReq(){
  document.getElementById('options').innerHTML = '';
var val = document.getElementById('search').value;
var list = Object.keys(search_list);

for(let i of list){

if(i.includes(val.toUpperCase())){
    var elem = document.createElement('div');
    var a = document.createElement('a');
    var but = document.createElement('button')
    
    a.className = 'search_op';
    elem.className = 'search_op';
but.style.fontFamily = 'Cormorant Garamond'
but.style.color = "white";
but.style.borderColor = "#e6eab7"
but.style.backgroundColor = "#e6eab7";
but.style.borderRadius = "10px"
but.style.fontWeight = "bold";
but.style.margin = "0px";
but.style.display = "block"
but.style.height = "50px";
but.style.width= "275px";
a.style.position = "absolute"
    elem.style.visibility = "visible";
    a.style.visibility = "visible";
    elem.style.height = "50px";
    a.style.height = "50px" 
    a.href = list[i];
	a.append(but)
    but.append(i);

    elem.appendChild(a);
    document.getElementById('options').append(elem);


}



}

}
</script>
<style>
:hover:-moz-placeholder{
    color:rgba(0, 0, 120, 0.8)
    
  } 
  
  :hover::-webkit-input-placeholder { 
    color:rgba(0, 0, 120, 0.8)}
  
  :hover:-ms-input-placeholder { 
    color:rgba(0, 0, 120, 0.8)}
  
  :hover::-moz-placeholder{ 
    color:rgba(0, 0, 120, 0.8)}
  
  
  
  
a{
text-decoration:none
}

	#options{position:absolute;z-index:1;width:50%;margin:auto;}
#search{
border-radius:25px;
font-family:Cormorant Garamond;
width:0px;
border-style:solid;
border-color:#a3b8c8;
display:inline-block;
height:50px;
text-align:center;
border-color:white;
transition:width 1s;
border-style:solid}
</style>
  
<svg onclick = "

var width = document.getElementById('search');
if(width.style.width == '0px'){
width.style.width = '350px';
}
else{
width.style.width = '0px'}


" style = "width:30px;height:20px;display:inline-block;">
<circle cx = 8 cy = 8 stroke-width = 3 stroke = "white" fill = "none" r = 6></circle>
<polyline points = "12 12 20 20 " stroke-width = 3 stroke = "white" fill = "none"></polyline>
</svg>
<input placeholder = "Search for info about The Children's Shoppe"  onkeyup = "searchReq()" id  = "search" type = "search" />

<div style = "position:relative"> 
    
<div id = "options"></div>

</div><br/>
</div>
<br>

<div id = "main-nav-bar-bottom-half">


<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-1')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-1')"type = "submit" id = "contact-button" class = "main-nav-bar-form-button">Contact</button>
<div class = "main-nav-bar-dropdown-container">
<ul class = "main-nav-bar-dropdown" onmouseenter = "dropDown('dropdown-button-1')"  >
<a href = ""><button class = "dropdown-button-1">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-1">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-1">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-1">Lorem  </button></a><br>

</ul>

</div>
</form>

</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-2')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-2')"  type = "submit" id = "products-button" class = "main-nav-bar-form-button">Products</button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-2">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-2">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-2">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-2">Lorem  </button></a><br>

</ul>

</div>
</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-3')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-3')"  type = "submit" id = "contac-button" class = "main-nav-bar-form-button">Lorem  </button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-3">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-3">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-3">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-3">Lorem  </button></a><br>

</ul>

</div>

</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-4')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-4')"  type = "submit" id = "home-button" class = "main-nav-bar-form-button">Lorem  </button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-4">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-4">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-4">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-4">Lorem  </button></a><br>

</ul>

</div>
</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-5')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-5')"  type = "submit" id = "home-button" class = "main-nav-bar-form-button">Lorem  </button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-5">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-5">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-5">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-5">Lorem  </button></a><br>

</ul>

</div>
</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-6')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-6')"  type = "submit" id = "home-button" class = "main-nav-bar-form-button">Lorem  </button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-6">Lorem</button></a><br>
<a href = ""><button class = "dropdown-button-6">Lorem</button></a><br>
<a href = ""><button class = "dropdown-button-6">Lorem</button></a><br>
<a href = ""><button class = "dropdown-button-6">Lorem</button></a><br>

</ul>

</div>
</span>



</div>


</nav>
</header>
<h1 style = "width:80%;margin:auto;border-bottom-style:solid;border-bottom-width:.2px;font-family:Raleway">Error: This email couldn't be sent because the credentials were invalid.
</h1>

</html>


`)

			
			
	}


	
})


app.use('/.netlify/functions/submit',router)

module.exports.handler = serverless(app);

