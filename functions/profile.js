 'use strict'
var mysql = require('mysql2')
var express = require('express')
var app = express();
var router = express.Router();
var serverless = require('serverless-http')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',(req,res)=>{
  res.send(`
 <html><head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">


<style>

@media(max-width:600px){.profile-data-unit{display:block};#post-header-body-div-1{display:none}#messaging-feature{margin:25%}#review-slider{width:100%;height:100%;visibility:visible}#start-review{width:50%;height:inherit;font-size:1em}body{font-family:Raleway}#contact-footer-div{visibility:hidden;position:fixed}#image-slider{display:none;background-color:transparent}.circle-select-buttons{display:none}
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

<div id="menu-bar" onmouseleave="menuStat('menu-bar')" style="width: 0px; height: 0px; font-size: 0px;">
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

<form action="/products" method="POST" class="main-nav-bar-form">

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
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-3" style="height: 0px; width: 0px; visibility: hidden;">Cost  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-3" style="height: 0px; width: 0px; visibility: hidden;">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-3" style="height: 0px; width: 0px; visibility: hidden;">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-3" style="height: 0px; width: 0px; visibility: hidden;">Brands  </button></form>

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
<script>
cart = []
function addCart(data){
cart.push(data)
}

window.onsubmit = () =>{



}
</script>
</div></header>
<div class="alert-item" id="special-offers" style="z-index:2;opacity:80%;background-color:black;width:80%;height:500px;right:10%;position:fixed;top:30px;margin:auto;color:white;text-align:center;visibility:hidden">
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

<br>
<style>
.profile-data-unit{
    display:block;border-radius:25px;height:200px;box-shadow: 1px 1px 1px 1px gray;width:49%;display:inline-block
}

    .past-product-item{display:block
    }.h2_styles{background-color:#f6f6f6};.h4_styles{background-color:whitesmoke}
</style>

<div id="profile-container" style="height:700px;font-family:Raleway"><div id="image-container" style="display:inline-block;padding-right:40px"><img id="profile-picture" style="background-color:red;box-shadow: 0 200px #f55353 inset;border-radius:200px;width:200px;height:200px;opacity:40%;top:0px" src="/pic_1.jpg"><h4 style="text-align:center">John Doe</h4></div><div id="profile-info" style="float:right;display:inline-block">
<div class="profile-data-unit" style="" id="profile-name" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Profile Name</h2><h4 class="h4_styles">John Smith</h4></div>





<div class="profile-data-unit" style="" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Account Created</h2><h4 class="h4_styles">January 15, 2025</h4></div><div class="profile-data-unit" style="" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Email</h2><h4 class="h4_styles" style="">johnsmith@gmail.com</h4></div><div class="profile-data-unit" style="" onmouseover="propChange(this,'boxShadow','2px 2px 14px black')" onmouseleave="propChange(this,'boxShadow','1px 1px 1px 1px gray')"><h2 class="h2_styles">Product Purchase History</h2>
<ul><il class="past-product-item"><a>Warm Sherpa Coat White</a></il><il class="past-product-item"><a>Kids Block Set 40 Piece</a></il><il class="past-product-item"><a>Warm Sherpa Coat White</a></il></ul></div></div></div><br>

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




<div id="post-header-body-div-3" class="body-div">













<br>
<br>
<br>
<br>
<br>

<footer style="height:700px;position:relative;background-color:#e6eab7;position:relative;background-color:#e6eab7;">
<div style="width:49%;color:white;background-color:#e6eab7;display:inline-block">
<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-7')">



<button onmouseover="dropDown('dropdown-button-7')" type="submit" class="main-nav-bar-form-button">Sweaters</button>
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<button type="submit" class="dropdown-button-7">Cost  </button>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-7">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-7">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-7">Brands  </button></form>

</div>

</div>


</span>


<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-8')">
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-8">Cost  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-8">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-8">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-8">Brands  </button></form>

</div>

</div>
<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-8')" type="submit" class="main-nav-bar-form-button">Coats</button>




<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-9')">
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<button type="submit" class="dropdown-button-9">Cost  </button>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-9">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-9">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-9">Brands  </button></form>

</div>

</div>


<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-9')" type="submit" class="main-nav-bar-form-button">Suits</button>




<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-9')">
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<button type="submit" class="dropdown-button-9">Cost  </button>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-9">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-9">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-9">Brands  </button></form>

</div>

</div>


<form action="" method="POST" class="main-nav-bar-form">

<button onmouseover="dropDown('dropdown-button-10')" type="submit" class="main-nav-bar-form-button">Dresses</button>
<span class="main-nav-bar-items-container" onmouseleave="revDropDown('dropdown-button-10')">
<div class="main-nav-bar-dropdown-container">
<div class="main-nav-bar-dropdown">
<button type="submit" class="dropdown-button-10">Cost  </button>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-10">Designs  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-10">Sizes  </button></form>
<form class="main-nav-bar-dropdown-forms" method="POST" action="/products"><button type="submit" class="dropdown-button-10">Brands  </button></form>
</div>
</div>
</span></form>
</span></form></span></form></span></div>



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





</div></body></html>
  `)
})


app.use('/.netlify/functions/profile',router)

module.exports.handler = serverless(app)
