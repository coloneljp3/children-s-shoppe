'use strict'
const { DsqlSigner } = require("@aws-sdk/dsql-signer");
var assert = require('node:assert')
var pg = require('pg')
const mysql = require('mysql2');
const express = require('express');
const router = express.Router();
const app = express();
const serverless = require('serverless-http');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/',(req,res)=>{
var user = req.body.User;
var psw = req.body.psw;
var cell = req.body.cell;
var email_user = req.body.email_user;
var email_psw = req.body.email_psw

async function example(clusterEndpoint) {
  let client;
  const region = "us-east-1";
  try {
    // The token expiration time is optional, and the default value 900 seconds
    const signer = new DsqlSigner({
      hostname: clusterEndpoint,
      region,
    });
    const token = await signer.getDbConnectAdminAuthToken();
    client = new pg.Client({
      host: clusterEndpoint,
      user: "admin",
      password: token,
      database: "postgres",
      port: 5432,
      // <https://node-postgres.com/announcements> for version 8.0
      ssl: true
    });

    // Connect
    await client.connect();

    // Create a new table
    await client.query(`CREATE TABLE IF NOT EXISTS Clients (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      username VARCHAR(30) NOT NULL,
      password VARCHAR(80) NOT NULL,
      email VARCHAR(40)
      cell varchar(12)
      profile_information varchar(255)
    )`);

    // Insert some data
    await client.query("INSERT INTO Clients VALUES(?,?,?)",[user,psw,email_user]
    );


  } catch (error) {
    console.error(error);
    raise
  } finally {
    client.end()
  }
  Promise.resolve()
}
example("jeabtzew5q42xhj32swa5o3j3u.dsql.us-east-1.on.aws");
res.send(`<!DOCTYPE html>
<html><head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">


<style>

@media(max-width:600px){#messaging-feature{margin:25%}#review-slider{width:100%;height:100%;visibility:visible}#start-review{width:50%;height:inherit;font-size:1em}body{font-family:Raleway}#contact-footer-div{visibility:hidden;position:fixed}#image-slider{display:none;background-color:transparent}.circle-select-buttons{display:none}
#main-nav-bar-bottom-half,.main-nav-bar-items-container{display:none}
#search_icon{position:fixed;top:10px;width:25px;right:20px}
.product-images-container{width:100%;display:block}}
@media (max-width:500px){#contact-footer-div{display:none}}
@media(max-width:400px){
.social-media-image-container{width:20px;height:20px}
.home-info{width:100%;display:block}#arrow_1,#arrow_2{width:25px;height:25px}



}
</style>
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&amp;family=Raleway:ital,wght@1,200&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@7f00..700&amp;family=Raleway:ital,wght@1,200&amp;display=swap" rel="stylesheet">

<link rel="stylesheet" href="/styles.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<script src="/functions.js" type="text/javascript">
window.addEventListener('change',()=>{
if(window.innerWidth <= '600px'){
document.getElementById('arrow_2').onclick = shiftReview('review-container','review-slider','arrow_2')
document.getElementById('arrow_1').onclick = shiftReview('review-container','review-slider','arrow_1')

}
else{
document.getElementById('arrow_2').onclick = shiftImage(['https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/326706496_3310115642633019_2159792958870315398_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mQtcmYTH5HIQ7kNvgGbkPeO&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AmqjLffJszvv4kLMv8bD48C&oh=00_AYBA6nn84jTfbhrh8HRPvdmTRpsK68ohphqmSMMRGO48gQ&oe=672CD2EB'
,'https://childrensshoppe.netlify.app/pic_1.jpg','https://childrensshoppe.netlify.app/pic_2.jpg','https://childrensshoppe.netlify.app/pic_3.jpg','https://childrensshoppe.netlify.app/pic_4.jpg'],'image-slider','arrow_2')
document.getElementById('arrow_1').onclick = shiftImage(['https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/326706496_3310115642633019_2159792958870315398_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mQtcmYTH5HIQ7kNvgGbkPeO&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AmqjLffJszvv4kLMv8bD48C&oh=00_AYBA6nn84jTfbhrh8HRPvdmTRpsK68ohphqmSMMRGO48gQ&oe=672CD2EB'
,'https://childrensshoppe.netlify.app/pic_1.jpg','https://childrensshoppe.netlify.app/pic_2.jpg','https://childrensshoppe.netlify.app/pic_3.jpg','https://childrensshoppe.netlify.app/pic_4.jpg'],'image-slider','arrow_1')
}

})
function imageSlide(id,urlList){
var image = document.getElementById(id);
for(let i of urlList){
setTimeout(()=>{image.style.opacity = 0%;image.style.opacity = 100%;image.src = i},4000);
};
};



</script>

<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="author" content="The Children's Shoppe">
<meta name="description" content="The Children's Shoppe is the best children's toy, clothing, and furniture store in Ruston, Louisiana.">
<meta name="generator" content="The Children's Shoppe">
<meta property="og:site_name" content="TheChildren'sShoppe">
<meta property="og:url" content="https://childrensshoppe.netlify.app/home">
<meta property="og:title" content="TheChildren'sShoppe">
<meta property="og:type" content="website">
<meta property="og:description" content="Infant and Children's clothing and toys in Ruston and Monroe Louisiana">





<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="TheChildren'sShoppe">
<meta name="twitter:description" content="Infant and Children's clothing and toys in Ruston and Monroe Louisiana">
<title>The Children's Shoppe</title>
</head>

<body><header id="main-header">
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

<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-1')" type="submit" id="contact-button" class="main-nav-bar-form-button">Contact</button>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown" onmouseenter="dropDown('dropdown-button-1')">
<a href="/home"><button class="dropdown-button-1">Owner  </button></a>
<a href="/home"><button class="dropdown-button-1">Staff  </button></a>
<a href="/home"><button class="dropdown-button-1">Locations  </button></a>
<a href="/home"><button class="dropdown-button-1">FAQs  </button></a>

</div>

</div>
</form>

</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-2')">

<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-2')" type="submit" id="products-button" class="main-nav-bar-form-button"><a>Products</a></button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<a href="/products"><button class="dropdown-button-2">Tops  </button></a>
<a href="/products"><button class="dropdown-button-2">Bottoms  </button></a>
<a href="/products"><button class="dropdown-button-2">Toys  </button></a>
<a href="/products"><button class="dropdown-button-2">Furniture  </button></a>

</div>

</div>
</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-3')">

<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-3')" type="submit" id="contact-button" class="main-nav-bar-form-button">Shirts  </button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<a href="/products"><button class="dropdown-button-3">Cost  </button></a>
<a href="/products"><button class="dropdown-button-3">Designs  </button></a>
<a href="/products"><button class="dropdown-button-3">Sizes  </button></a>
<a href="/products"><button class="dropdown-button-3">Brands  </button></a>

</div>

</div>

</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-4')">

<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-4')" type="submit" id="home-button" class="main-nav-bar-form-button">Pants  </button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<a href="/products"><button class="dropdown-button-4">Cost  </button></a>
<a href="/products"><button class="dropdown-button-4">Designs  </button></a>
<a href="/products"><button class="dropdown-button-4">Sizes  </button></a>
<a href="/products"><button class="dropdown-button-4">Brands  </button></a>


</div>

</div>
</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-5')">

<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-5')" type="submit" id="home-button" class="main-nav-bar-form-button">Shorts  </button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<a href="/products"><button class="dropdown-button-5">Cost  </button></a>
<a href="/products"><button class="dropdown-button-5">Designs  </button></a>
<a href="/products"><button class="dropdown-button-5">Sizes  </button></a>
<a href="/products"><button class="dropdown-button-5">Brands  </button></a>

</div>

</div>
</span>

<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-6')">

<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-6')" type="submit" id="home-button" class="main-nav-bar-form-button">Skirts  </button>

</form>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<a href="/products"><button class="dropdown-button-6" style="height: 0px; width: 0px; visibility: hidden;">Costs </button></a>
<a href="/products"><button class="dropdown-button-6" style="height: 0px; width: 0px; visibility: hidden;">Designs </button></a>
<a href="/products"><button class="dropdown-button-6" style="height: 0px; width: 0px; visibility: hidden;">Sizes </button></a>
<a href="/products"><button class="dropdown-button-6" style="height: 0px; width: 0px; visibility: hidden;">Brands </button></a>

</div>

</div>
</span>




</div>



</nav>
<script>
cart = []
function addCart(data){
cart.push(data)
}

window.onsubmit = () =>{



}
</script>
</div></header>
<div class="alert-item" id="special-offers" style="z-index: 2; opacity: 0.8; background-color: black; width: 80%; height: 500px; right: 10%; position: fixed; top: 30px; margin: auto; color: white; text-align: center; visibility: hidden;">
<span style="float:left;font-size:20px;font-family:Raleway;font-weight:bold" onclick="document.getElementById('special-offers').style.visibility = 'hidden'">X</span>
<h1 style="font-family:Raleway;font-size:3em">Special Offers</h1>
<div class="product-images-container" id="product-images-container-1">
  <img class="product-images">
    <h2>Product Image</h2>
  <input class="product-titles" value="Product Image">
  <br>
<span style="color:red;text-decoration:line-through
    "><p style="font-family:Helvetica;text-align:center">$100.00</p></span>
    <p>50% OFF</p><input style="display:none;" class="price" value="2">
    <label>Quantity</label><input class="select-quantity" style="
    width: 20px;
">
    <button class="buy-button">Add to Cart</button>
  </div></div>
<div class="alert-item" id="account-forms" style="z-index: 3; opacity: 0.8; background-color: rgb(75, 85, 118); width: 100%; height: 100%; position: fixed; color: white; text-align: center; top: 0px; visibility: hidden;">
<span style="float:left;font-size:20px;font-family:Raleway;font-weight:bold" onclick="document.getElementById('account-forms').style.visibility = 'hidden'">X</span>

<div id="2_dif_forms" style="border-color:rgb(145 151 81);border-style: solid;width:500px;border-width: .3cm; text-align: center;margin:auto"><button onclick="var x = document.getElementById('sgnp'); x.style.color = rgb(145 151 81);x.style.backgroundColor = white;var c =document.getElementById('lgin'); c.style.color = white;c.style.backgroundColor = rgb(145 151 81);var form_1 = document.getElementById('form_1');var form_2 = document.getElementById('form_2'); form_1.style.display = none;form_2.style.display = block" id="lgin" style="border-color: whitesmoke; border-radius: 0%; width: 100px; height: 50px; background-color: rgb(145 151 81); color: white; font-family: Raleway; font-size: large;">Login</button><button onclick="var x = document.getElementById('lgin'); x.style.color = rgb(145 151 81);x.style.backgroundColor = white; var c =document.getElementById('sgnp'); c.style.color = white;c.style.backgroundColor = rgb(145 151 81);var form_1 = document.getElementById('form_1');var form_2 = document.getElementById('form_2');form_2.style.display = none;form_1.style.display = block" id="sgnp" style="border-color: whitesmoke; border-radius: 0%; width: 100px; height: 50px; color: rgb(145 151 81); background-color: white; font-family: Arial; font-size: large;">Sign up</button><form name="form_1" style="display: none; margin: 0% 1cm 1cm; border-width: 0.3cm; border-style: solid; border-color: rgb(145 151 81);" action="/signup" method="post" id="form_1"><br><h1 style="font-family:Montserrat;font-size: 1cm;text-align: center;">Create Account</h1><span style="text-align: center;">_____________</span><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" id="User" name="User" placeholder="Type your username" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" id="psw" name="psw" placeholder="Type your password" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" name="cell" id="cell" placeholder="Type your cell" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" name="email_user" id="email_user" placeholder="Type your email" type="text"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" name="email_psw" id="email_psw" placeholder="Type your password for your email" type="text"><br><button style="border-color:rgb(145 151 81);border-radius: 0%; width:100px;height:50px;color:white;background-color:rgb(145 151 81) ;font-family:Arial;font-size: large;border-style: none;" onclick="formCheck();" id="register" type="submit">Register</button><script>function formCheck(){var user = document.getElementById('User').value;var email,email_psw,cell,psw;psw = document.getElementById('psw').value;email =  document.getElementById('email_user').value;email_psw =  document.getElementById('email_psw').value;cell =  document.getElementById('cell').value;if((email == ""||email=="undefined")||(cell == ""||cell== "undefined")||(email_psw ==""||email_psw== "undefined")||(User == "" || User== "undefined")||(psw == ""||psw == "undefined")){document.getElementById('register').type = 'text';document.getElementById('form_1').action = '/login';alert("Please fill all fields");}}</script></form><form name="form_2" id="form_2" action="/.netlify/functions/login_sub" method="post" style="display: block; margin: 0% 1cm 1cm; border-width: 0.3cm; border-style: solid; border-color: rgb(145 151 81); font-family: Raleway;"><label><h1 style="font-size: 1cm;">Login</h1><span style="text-align: center;">_____________</span><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" placeholder="Type your username" name="login_user" id="lu"><br><br><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;" placeholder="Type your password" id="pw" name="login_psw"><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;display:none" name="cell" placeholder="Type your cell" type="text"><input style="width: 200px;height:60px;font-size: .5cm;border-style: solid;border-color: rgb(145 151 81);text-align: center;display:none" name="email_user" placeholder="Type your cell" type="text"></label><br><br><button style="border-color:whitesmoke;border-radius: 0%; width:100px;height:50px;color:white;background-color:rgb(145 151 81) ;font-family:Arial;font-size: large;border-style:none" type="submit">Login</button></form></div>

</div>

<div id="product-selection"></div>
<div id="main-page-heading-container"><h1 id="main-page-heading">The Children's Shoppe</h1></div>
<div class="body-div">



<div style="border-bottom-style:solid;border-bottom-width:.2px;margin:auto;width:80%;margin-top:20%">
<h1 style="font-family:Raleway">The page you have requested is still under construction. We will let you know as soon as it is finished</h1>

</div>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>




</body></html>`)


}
        )


app.use("/.netlify/functions/login",router);

module.exports.handler = serverless(app); 
