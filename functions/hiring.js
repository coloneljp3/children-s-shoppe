 'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',(req,res)=>{
res.send(`
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">


<style>

@media(max-width:600px){.circle-select-buttons{display:none}
#main-nav-bar-bottom-half,.main-nav-bar-items-container{display:none}#image-slider{display:none;background-color:transparent}
#search_icon{position:fixed;top:10px;width:25px;right:20px}
.product-images-container{width:100%;display:block}}
@media(max-width:400px){
.social-media-image-container{width:20px;height:20px}
.home-info{width:100%;display:block}#arrow_1,#arrow_2{width:25px;height:25px}



}
</style>
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&amp;family=Raleway:ital,wght@1,200&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@7f00..700&amp;family=Raleway:ital,wght@1,200&amp;display=swap" rel="stylesheet">

<link rel = "stylesheet" href = "/styles.css"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<script src = "/functions.js" type = "text/javascript">

function imageSlide(id,urlList){
var image = document.getElementById(id);
for(let i of urlList){
setTimeout(()=>{image.style.opacity = 0%;image.style.opacity = 100%;image.src = i},4000);
};
};



</script>

<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
<meta charset = "utf-8">
<meta http-equiv = "X-UA-Compatible" content = "IE=edge,chrome=1">
<meta name="author" content = "The Children's Shoppe">
<meta name = "description" content = "The Children's Shoppe is the best children's toy, clothing, and furniture store in Ruston, Louisiana.">
<meta name = "generator" content = "The Children's Shoppe">
<meta property="og:site_name" content="TheChildren&#39;sShoppe">
<meta property="og:url" content="https://childrensshoppe.netlify.app/home">
<meta property="og:title" content="TheChildren&#39;sShoppe">
<meta property="og:type" content="website">
<meta property="og:description" content="Infant and Children's clothing and toys in Ruston and Monroe Louisiana">





<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="TheChildren&#39;sShoppe">
<meta name="twitter:description" content="Infant and Children's clothing and toys in Ruston and Monroe Louisiana">
<title>The Children's Shoppe</title>
</head>

<header id = "main-header">
<div style = "background-color:#e6eab7;height:50%;width:100%">

<svg style = "z-index:1;position:fixed;left:15px;display:inline-block" onclick = "menuStat('menu-bar')">

<polyline stroke = "green" stroke-width = "4" points = "0 10 40 10"></polyline>
<polyline stroke = "green" stroke-width = "4" points = "0 20 40 20"></polyline>
<polyline stroke = "green" stroke-width = "4" points = "0 30 40 30"></polyline>

</svg>

<div id = "menu-bar">
<form action = ""><button type = "submit" class = "menu-bar-options">Contact</button></form>
<form><button type = "submit" class = "menu-bar-options">Products</button></form>
<form><button type = "submit" class = "menu-bar-options">Contact</button></form>
<form><button type = "submit" class = "menu-bar-options">Contact</button></form>
<form><button type = "submit" class = "menu-bar-options">Hiring</button></form>
</div><img style = "height:100%" src = "/main_logo.jpg"></img>


</div>

<nav id = "main-nav-bar">
<div id = "main-nav-bar-top-half">
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
  
<svg id = "search_icon" onclick = "

var width = document.getElementById('search');
if(width.style.width == '0px'){
width.style.width = '350px';
}
else{
width.style.width = '0px'}


" style = "z-index:1;width:30px;height:20px;display:inline-block;color:green">
<circle cx = 8 cy = 8 stroke-width = 3 stroke = "green" fill = "none" r = 6></circle>
<polyline points = "12 12 20 20 " stroke-width = 3 stroke = "green" fill = "none"></polyline>
</svg>
<input placeholder = "Search for info about The Children's Shoppe"  onkeyup = "searchList(this.value)" id  = "search" type = "search" />

<div style = "position:relative"> 
    
<div id = "options"></div>
<div id = "precursor"></div>
</div><br/>
</div>
<br>

<div id = "main-nav-bar-bottom-half">


<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-1')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-1')"type = "submit" id = "contact-button" class = "main-nav-bar-form-button">Contact</button>
<div class = "main-nav-bar-dropdown-container">
<div class = "main-nav-bar-dropdown" onmouseenter = "dropDown('dropdown-button-1')"  >
<a href = "/home"><button class = "dropdown-button-1">Owner  </button></a>
<a href = "/home"><button class = "dropdown-button-1">Staff  </button></a>
<a href = "/home"><button class = "dropdown-button-1">Locations  </button></a>
<a href = "/home"><button class = "dropdown-button-1">FAQs  </button></a>

</div>

</div>
</form>

</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-2')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-2')"  type = "submit" id = "products-button" class = "main-nav-bar-form-button"><a href = "/products">Products</a></button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = "/products"><button class = "dropdown-button-2">Tops  </button></a>
<a href = "/products"><button class = "dropdown-button-2">Bottoms  </button></a>
<a href = "/products"><button class = "dropdown-button-2">Toys  </button></a>
<a href = "/products"><button class = "dropdown-button-2">Furniture  </button></a>

</div>

</div>
</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-3')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-3')"  type = "submit" id = "contac-button" class = "main-nav-bar-form-button">Shirts  </button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = "/products"><button class = "dropdown-button-3">Cost  </button></a>
<a href = "/products"><button class = "dropdown-button-3">Designs  </button></a>
<a href = "/products"><button class = "dropdown-button-3">Sizes  </button></a>
<a href = "/products"><button class = "dropdown-button-3">Brands  </button></a>

</div>

</div>

</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-4')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-4')"  type = "submit" id = "home-button" class = "main-nav-bar-form-button">Pants  </button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = "/products"><button class = "dropdown-button-4">Cost  </button></a>
<a href = "/products"><button class = "dropdown-button-4">Designs  </button></a>
<a href = "/products"><button class = "dropdown-button-4">Sizes  </button></a>
<a href = "/products"><button class = "dropdown-button-4">Brands  </button></a>


</div>

</div>
</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-5')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-5')"  type = "submit" id = "home-button" class = "main-nav-bar-form-button">Shorts  </button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = "/products"><button class = "dropdown-button-5">Cost  </button></a>
<a href = "/products"><button class = "dropdown-button-5">Designs  </button></a>
<a href = "/products"><button class = "dropdown-button-5">Sizes  </button></a>
<a href = "/products"><button class = "dropdown-button-5">Brands  </button></a>

</div>

</div>
</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-6')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-6')"  type = "submit" id = "home-button" class = "main-nav-bar-form-button">Skirts  </button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = "/products"><button class = "dropdown-button-6">Costs </button></a>
<a href = "/products"><button class = "dropdown-button-6">Designs </button></a>
<a href = "/products"><button class = "dropdown-button-6">Sizes </button></a>
<a href = "/products"><button class = "dropdown-button-6">Brands </button></a>

</div>

</div>
</span>




</div>


</nav>
</header>
<div class = "alert-item" id = "special-offers" style="z-index:2;opacity:80%;background-color:black;width:80%;height:500px;right:10%;position:fixed;top:30px;margin:auto;color:white;text-align:center">
<span style = "float:left;font-size:20px;font-family:Raleway;font-weight:bold" onclick = "document.getElementById('special-offers').style.visibility = 'hidden'">X</span>
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

<body>
<div id = "main-page-heading-container"><h1 id = "main-page-heading" >Careers/Hiring</h1></div>
<div id = "post-header-body-div-1" class = "body-div">

<div style="background-color:rgb(145 151 81)">
<div class="hiring-forms" id="hiring-contact-info"><h1 class="hiring-form-headers">Children's Shoppe Hiring Contact Information</h1>
<div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers">Phone Number</h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div>
    <div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers">Email Address</h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div>
    <div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers">Name</h2><label class = "hiring-label">First Name</label><input class = "hiring-inputs" placeholder="Please type in..."><label class = "hiring-label">Middle Initial</label><input style = "width:20px;display:inline-block" class = "hiring-inputs" placeholder="Please type in..."><label class = "hiring-label">Last Name</label><input style = "display:inline-block" class = "hiring-inputs" placeholder="Please type in..."></div>
    <div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers"></h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div>
</div>
<div class="hiring-forms" id="hiring-work-history"><h1 class="hiring-form-headers">Children's Shoppe Work History Form</h1><div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers"></h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div>
    <div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers"></h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div>
    <div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers"></h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div>
    <div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers"></h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div></div>
<div class="hiring-forms" id="hiring-references"><h1 class="hiring-form-headers">Children's Shoppe Work References Form</h1><div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers"></h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div>
    <div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers"></h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div>
    <div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers"></h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div>
    <div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers"></h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div></div>
<div class="hiring-forms" id="hiring-preferences"><h1 class="hiring-form-headers">Hiring Preferences</h1><div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers"></h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div>
    <div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers"></h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div>
    <div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers"></h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div>
    <div class="sub-hiring-forms"><h2 class="sub-hiring-form-headers"></h2><label class = "hiring-label">Please type below...</label><input class = "hiring-inputs" placeholder="Please type in..."></div></div>

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

<div id = "post-header-body-div-2" class = "body-div"> 
<input style="border-style:solid;border-color: green;;border-width:3px;font-family:Raleway;text-align:center;height:30px;border-radius:25px;width:50%" placeholder="Type in a filter for the product you want"/>



<div id = "post-header-body-div-3" class = "body-div">
</div>


</body>


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

<footer style = "position:relative;background-color:#e6eab7;">
<div style = "width:49%;color:white;background-color:#e6eab7;display:inline-block">
<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-7')" >

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-7')" type = "submit" class = "main-nav-bar-form-button">Sweaters</button>
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = "/products"><button class = "dropdown-button-7">Cost  </button></a>
<a href = "/products"><button class = "dropdown-button-7">Designs  </button></a>
<a href = "/products"><button class = "dropdown-button-7">Sizes  </button></a>
<a href = "/products"><button class = "dropdown-button-7">Brands  </button></a>

</div>

</div>
</form>

</span>


<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-8')">
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = "/products"><button class = "dropdown-button-8">Cost  </button></a>
<a href = "/products"><button class = "dropdown-button-8">Designs  </button></a>
<a href = "/products"><button class = "dropdown-button-8">Sizes  </button></a>
<a href = "/products"><button class = "dropdown-button-8">Brands  </button></a>

</div>

</div>
<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-8')" type = "submit"  class = "main-nav-bar-form-button">Coats</button>

</form>

</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-9')">
<div class = "main-nav-bar-dropdown-container">
<div class = "main-nav-bar-dropdown">
<a href = "/products"><button class = "dropdown-button-9">Cost  </button></a>
<a href = "/products"><button class = "dropdown-button-9">Designs  </button></a>
<a href = "/products"><button class = "dropdown-button-9">Sizes  </button></a>
<a href = "/products"><button class = "dropdown-button-9">Brands  </button></a>

</div>

</div>
<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-9')"  type = "submit"  class = "main-nav-bar-form-button">Suits</button>

</form>

</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-10')">
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = "/products"><button class = "dropdown-button-10">Cost  </button></a>
<a href = "/products"><button class = "dropdown-button-10">Designs  </button></a>
<a href = "/products"><button class = "dropdown-button-10">Sizes  </button></a>
<a href = "/products"><button class = "dropdown-button-10">Brands  </button></a>

</div>

</div>
<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-10')" type = "submit"  class = "main-nav-bar-form-button">Dresses</button>

</form>

</span>






</div>


<div>
<div style = "color:white;background-color:black;font-family:helvetica" id = "contact-footer-div">
<h3>The Children's Shoppe</h3>
<div id = "map"></div>
<p><b>109 N Trenton St<br>
Ruston, LA 71270</b></p>
<p><b>(318)-251-9599</b></p>


</div>
<div id = "messaging-feature">
<h4 style = "text-align:center">Have a Question? Contact Us.</h4>
<form method = "POST" id = "email" action = "/submit">
<h4 style = "text-align:center">Type your full name in the box below.</h4>
<textarea id = "sender" name = "sender"></textarea>
<h4 style = "text-align:center">Type your message in the box below.</h4>
<textarea id = "message" name = "message"></textarea>
<button id = "message-button" type = "submit">Send</button>
</form>
<div style = "color:#a1ad20;background-color:#e6eab7;display:block">
<h4 style = "text-align:center">Follow Us!</h4>
<div class = "social-media-image-container"><a href = ""><img class = "social-media-image" width="50" height="50" src="https://img.icons8.com/ios/50/facebook-new.png" alt="facebook-new"/>
</a></div>
<div class = "social-media-image-container"><a href = ""><img src = "/twitter.png" class = "social-media-image"></img></a></div>
<div class = "social-media-image-container"><a href = ""><img src = "https://pluspng.com/img-png/instagram-png-instagram-icon-1600.png" class = "social-media-image" ></img></a></div></div>
</div>
</div>


<p style = "display:inline-block;text-align:center;width:100%;font-family:Cormorant Garamond;color:#a1ad20;background-color:#e6eab7">Hephty Solutions | All Rights Reserved</p>


</footer>

</html>



`)})
app.use('/.netlify/functions/hiring',router)

module.exports.handler = serverless(app);
