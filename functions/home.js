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
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
@media(max-width:600px){
#main-nav-bar-bottom-half{visibility:hidden};

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

<svg style = "float:left;display:inline-block" onclick = "
function menuStat(id){
var menu = document.getElementById(menu);
if(menu.style.width == '0px'){
menu.style.width == '50%';
};
else{
menu.style.width == '0%';
}
}
menuStat('menu-bar')
">
<script>function menuStat(id){
var menu = document.getElementById(menu);
if(menu.style.width == '0px'){
menu.style.width == '50%';
};
else{
menu.style.width == '0px';
}
}
menuStat('menu-bar')</script>
<polyline stroke = "black" stroke-width = "4" points = "0 10 50 10"></polyline>
<polyline stroke = "black" stroke-width = "4" points = "0 20 50 20"></polyline>
<polyline stroke = "black" stroke-width = "4" points = "0 30 50 30"></polyline>

</svg>

<div id = "menu-bar" style = "position:absolute;z-index:1;width:0px;height:1000px;border-right-style:solid;border-right-width:.01px"></div><img style = "height:100%" src = "/main_logo.jpg"></img>

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
<div class = "main-nav-bar-dropdown" onmouseenter = "dropDown('dropdown-button-1')"  >
<a href = ""><button class = "dropdown-button-1">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-1">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-1">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-1">Lorem  </button></a>

</div>

</div>
</form>

</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-2')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-2')"  type = "submit" id = "products-button" class = "main-nav-bar-form-button">Products</button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-2">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-2">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-2">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-2">Lorem  </button></a>

</div>

</div>
</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-3')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-3')"  type = "submit" id = "contac-button" class = "main-nav-bar-form-button">Lorem  </button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-3">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-3">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-3">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-3">Lorem  </button></a>

</div>

</div>

</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-4')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-4')"  type = "submit" id = "home-button" class = "main-nav-bar-form-button">Lorem  </button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-4">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-4">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-4">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-4">Lorem  </button></a>

</div>

</div>
</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-5')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-5')"  type = "submit" id = "home-button" class = "main-nav-bar-form-button">Lorem  </button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-5">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-5">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-5">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-5">Lorem  </button></a>

</div>

</div>
</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-6')">

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-6')"  type = "submit" id = "home-button" class = "main-nav-bar-form-button">Lorem  </button>

</form>
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-6">Lorem</button></a>
<a href = ""><button class = "dropdown-button-6">Lorem</button></a>
<a href = ""><button class = "dropdown-button-6">Lorem</button></a>
<a href = ""><button class = "dropdown-button-6">Lorem</button></a>

</div>

</div>
</span>



</div>


</nav>
</header>

<body>
<div id = "product-selection"></div>
<button onclick = "productReq();priceSort('price')">Find all products from least to most expensive</button>
<div id = "main-page-heading-container"><h1 id = "main-page-heading" >The Children's Shoppe</h1></div>
<div id = "post-header-body-div-1" class = "body-div">



<div style = "width:100%">
<button id = "arrow_1" onclick = "shiftImage(['https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/326706496_3310115642633019_2159792958870315398_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mQtcmYTH5HIQ7kNvgGbkPeO&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AmqjLffJszvv4kLMv8bD48C&oh=00_AYBA6nn84jTfbhrh8HRPvdmTRpsK68ohphqmSMMRGO48gQ&oe=672CD2EB'
,'https://childrensshoppe.netlify.app/pic_1.jpg','https://childrensshoppe.netlify.app/pic_2.jpg','https://childrensshoppe.netlify.app/pic_3.jpg','https://childrensshoppe.netlify.app/pic_4.jpg'],'image-slider','arrow_1')"  >
<

</button>
<button id = "arrow_2" onclick = "shiftImage(['https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/326706496_3310115642633019_2159792958870315398_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mQtcmYTH5HIQ7kNvgGbkPeO&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AmqjLffJszvv4kLMv8bD48C&oh=00_AYBA6nn84jTfbhrh8HRPvdmTRpsK68ohphqmSMMRGO48gQ&oe=672CD2EB'
,'https://childrensshoppe.netlify.app/pic_1.jpg','https://childrensshoppe.netlify.app/pic_2.jpg','https://childrensshoppe.netlify.app/pic_3.jpg','https://childrensshoppe.netlify.app/pic_4.jpg'],'image-slider','arrow_2')">
>

</button>
<button id = "call-to-action" style = "border-width:5px;border-color:white;border-radius:25px;font-family:Raleway;text-align:center;position:absolute;font-size:40px;width:79%;left:12.5%;top:700px;z-index:1;color:white;margin:auto;background-color:transparent;border-style:none" onmouseover="propChange('call-to-action','transition', 'border-style 1s')propChange('call-to-action','borderStyle','solid');" onmouseleave="propChange('call-to-action','borderStyle','none');">Browse Our Store Online Or In Person!</button>
<img src = "https://www.consignkoolkids.com/img/slideClothesEdge.jpg" id = "image-slider" style = "filter:grayscale(40%);height:100%;opacity:80%" ></img>
<svg style = "text-align:center;margin:auto"><circle cx = "20" cy = "20" r = "5" stroke = "black"></circle>
<circle cx = "40" cy = "20" r = "5" stroke = "black"></circle>
<circle cx = "60" cy = "20" r = "5" stroke = "black"></circle>


</svg></div>
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
<div class = "product-images-container" id = "product-images-container-1" onmouseover = "this.style.borderStyle = 'solid';this.style.borderColor = '#e6eab7'" onmouseleave = "this.style.borderStyle = 'none';this.style.borderColor = 'white'"><img class = "product-images"></img><h2>Product Image</h2><p>Lorem  </p></div>
<div class = "product-images-container" id = "product-images-container-2" onmouseover = "this.style.borderStyle = 'solid';this.style.borderColor = '#e6eab7'" onmouseleave = "this.style.borderStyle = 'none';this.style.borderColor = 'white'"><img class = "product-images"></img><h2>Product Image</h2><p>Lorem  </p></div>
<div class = "product-images-container" id = "product-images-container-3" onmouseover = "this.style.borderStyle = 'solid';this.style.borderColor = '#e6eab7'" onmouseleave = "this.style.borderStyle = 'none';this.style.borderColor = 'white'"><img class = "product-images"></img><h2>Product Image</h2><p>Lorem  </p></div>
<div class = "product-images-container" id = "product-images-container-4" onmouseover = "this.style.borderStyle = 'solid';this.style.borderColor = '#e6eab7'" onmouseleave = "this.style.borderStyle = 'none';this.style.borderColor = 'white'"><img class = "product-images"></img><h2>Product Image</h2><p>Lorem  </p></div>

</div>

<div id = "post-header-body-div-3" class = "body-div">
<div onmouseover = "this.style.backgroundColor = 'white';this.style.color = '#a3b8c8';this.style.borderStyle = 'solid';this.style.borderColor = '#a3b8c8'" onmouseleave = "this.style.backgroundColor = '#e6eab7'; this.style.color = '#a1ad20';this.style.borderStyle = 'none';this.style.borderColor = 'white'" id = "home-info-1" class = "home-info">
<h2 class = "secondary-headings" id = "home-info-1-secondary-headings">Mission Statement</h2>
<p>Since 2004, it's been our goal to provide families in Ruston and Monroe with the best quality clothing and toys for their children.
Whether your child is a newborn or a toddler, we can service your needs.
</p>
</div>
<div onmouseover = "this.style.backgroundColor = 'white';this.style.color = '#a3b8c8';this.style.borderStyle = 'solid';this.style.borderColor = '#a3b8c8'" onmouseleave = "this.style.backgroundColor = '#e6eab7'; this.style.color = '#a1ad20';this.style.borderStyle = 'none';this.style.borderColor = 'white'"id = "home-info-2" class = "home-info">
<h2 class = "secondary-headings" id = "home-info-2-secondary-headings">Our Staff</h2>
<p>Our shoppe has come a long way, and it wouldn't be where it is without our lovely staff. We've cultivated a great work environment for our employees, and our respect for our staff is reflected in our customer service.
</p>
</div>
<div onmouseover = "this.style.backgroundColor = 'white';this.style.color = '#a3b8c8';this.style.borderStyle = 'solid';this.style.borderColor = '#a3b8c8'" onmouseleave = "this.style.backgroundColor = '#e6eab7'; this.style.color = '#a1ad20'; this.style.borderStyle = 'none';this.style.borderColor = 'white'" id = "home-info-3" class = "home-info">
<h2 class = "secondary-headings" id = "home-info-3-secondary-headings">Our Selection</h2>
<p>    Whether you need toys, shoes, or clothes for your child, we have what you need. Our store has a large selection of sizes and fits for children's clothing. If you need it, we have it.
</p></div>


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

<button onmouseover = "dropDown('dropdown-button-7')" type = "submit" class = "main-nav-bar-form-button">Contact</button>
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-7">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-7">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-7">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-7">Lorem  </button></a>

</div>

</div>
</form>

</span>


<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-8')">
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-8">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-8">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-8">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-8">Lorem  </button></a>

</div>

</div>
<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-8')" type = "submit"  class = "main-nav-bar-form-button">Contact</button>

</form>

</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-9')">
<div class = "main-nav-bar-dropdown-container">
<div class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-9">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-9">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-9">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-9">Lorem  </button></a>

</div>

</div>
<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-9')"  type = "submit"  class = "main-nav-bar-form-button">Contact</button>

</form>

</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-10')">
<div class = "main-nav-bar-dropdown-container" >
<div class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-10">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-10">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-10">Lorem  </button></a>
<a href = ""><button class = "dropdown-button-10">Lorem  </button></a>

</div>

</div>
<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-10')" type = "submit"  class = "main-nav-bar-form-button">Contact</button>

</form>

</span>




</div>


<div>
<div style = "color:white;background-color:black;font-family:helvetica" id = "contact-footer-div">
<h3>The Children's Shoppe</h3>
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
<button id = "message-button" onclick = "xmlMailSend()">Send</button>
</form>
<div style = "color:#a1ad20;background-color:#e6eab7;display:block">
<h4 style = "text-align:center">Follow Us!</h4>
<div class = "social-media-image-container"><a href = ""><img src = "/facebook.svg" class = "social-media-image"></img></a></div>
<div class = "social-media-image-container"><a href = ""><img src = "/twitter.png" class = "social-media-image"></img></a></div>
<div class = "social-media-image-container"><a href = ""><img src = "/insta-icon.png" class = "social-media-image" ></img></a></div></div>
</div>
</div>


<p style = "display:inline-block;text-align:center;width:100%;font-family:Cormorant Garamond;color:#a1ad20;background-color:#e6eab7">Hephty Solutions | All Rights Reserved</p>


</footer>

</html>



`);})
app.use('/.netlify/functions/home',router)

module.exports.handler = serverless(app);
