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
</script>
<script>
while(True){
imageSlide('image-slider',['https://childrensshoppe.netlify.app/pic_1.jpg','https://childrensshoppe.netlify.app/pic_2.jpg','https://3.bp.blogspot.com/_agDfEExZqlg/TKAjZaWTMfI/AAAAAAAABmE/j6l91yesQn8/s1600/Quality+Discount+Clothes+for+Kids+10.jpg','https://ae01.alicdn.com/kf/HTB1OR.jdzgy_uJjSZTEq6AYkFXaD/Newborn-Baby-Boy-Clothing-Set-Toddler-Child-Kids-Warm-Spring-Fashion-Outerwear-Children-s-Boys-Clothes.jpg','https://thumbs.dreamstime.com/b/kids-clothes-toys-different-88173947.jpg','https://www.consignkoolkids.com/img/slideClothesEdge.jpg'])
}
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
<div style = "background-color:white;height:50%;width:100%">

<img style = "height:100%" src = "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/326706496_3310115642633019_2159792958870315398_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mQtcmYTH5HIQ7kNvgGbkPeO&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AmqjLffJszvv4kLMv8bD48C&oh=00_AYBA6nn84jTfbhrh8HRPvdmTRpsK68ohphqmSMMRGO48gQ&oe=672CD2EB"></img>

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
but.style.backgroundColor = "#a3b8c8";
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

<body>

<div id = "post-header-body-div-1" class = "body-div">


<h1 id = "main-page-heading" onload = "this.style.visibility = 'visible'">The Children's Shoppe</h1>

<img id = "image-slider" ></img>


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
<div onmouseover = "this.style.backgroundColor = 'white';this.style.color = '#a3b8c8';this.style.borderStyle = 'solid';this.style.borderColor = '#a3b8c8'" onmouseleave = "this.style.backgroundColor = '#e6eab7'; this.style.color = 'white'; this.style.color = 'white';this.style.borderStyle = 'none';this.style.borderColor = 'white'" id = "home-info-1" class = "home-info">
<h2 class = "secondary-headings" id = "home-info-1-secondary-headings">About Us</h2>
Lorem Ipsum
</div>
<div onmouseover = "this.style.backgroundColor = 'white';this.style.color = '#a3b8c8';this.style.borderStyle = 'solid';this.style.borderColor = '#a3b8c8'" onmouseleave = "this.style.backgroundColor = '#e6eab7'; this.style.color = 'white'; this.style.color = 'white';this.style.borderStyle = 'none';this.style.borderColor = 'white'"id = "home-info-2" class = "home-info">
<h2 class = "secondary-headings" id = "home-info-2-secondary-headings">About Us</h2>
Lorem Ipsum
</div>
<div onmouseover = "this.style.backgroundColor = 'white';this.style.color = '#a3b8c8';this.style.borderStyle = 'solid';this.style.borderColor = '#a3b8c8'" onmouseleave = "this.style.backgroundColor = '#e6eab7'; this.style.color = 'white'; this.style.color = 'white';this.style.borderStyle = 'none';this.style.borderColor = 'white'" id = "home-info-3" class = "home-info">
<h2 class = "secondary-headings" id = "home-info-3-secondary-headings">About Us</h2>
Lorem Ipsum
</div>


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

<footer style = "position:relative;background-color:#a3b8c8;">
<div style = "width:49%;color:white;background-color:#a3b8c8;display:inline-block">
<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-7')" >

<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-7')" type = "submit" class = "main-nav-bar-form-button">Contact</button>
<div class = "main-nav-bar-dropdown-container" >
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-7">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-7">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-7">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-7">Lorem  </button></a><br>

</ul>

</div>
</form>

</span>


<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-8')">
<div class = "main-nav-bar-dropdown-container" >
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-8">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-8">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-8">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-8">Lorem  </button></a><br>

</ul>

</div>
<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-8')" type = "submit"  class = "main-nav-bar-form-button">Contact</button>

</form>

</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-9')">
<div class = "main-nav-bar-dropdown-container">
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-9">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-9">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-9">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-9">Lorem  </button></a><br>

</ul>

</div>
<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-9')"  type = "submit"  class = "main-nav-bar-form-button">Contact</button>

</form>

</span>

<span class = "main-nav-bar-items-container" onmouseleave = "revDropDown('dropdown-button-10')">
<div class = "main-nav-bar-dropdown-container" >
<ul class = "main-nav-bar-dropdown">
<a href = ""><button class = "dropdown-button-10">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-10">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-10">Lorem  </button></a><br>
<a href = ""><button class = "dropdown-button-10">Lorem  </button></a><br>

</ul>

</div>
<form action = "" method = "POST" class = "main-nav-bar-form">

<button onmouseover = "dropDown('dropdown-button-10')" type = "submit"  class = "main-nav-bar-form-button">Contact</button>

</form>

</span>




</div>


<div>
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

<p style = "display:inline-block;text-align:center;width:100%;font-family:Cormorant Garamond;color:#a1ad20;background-color:#e6eab7">Hephty Solutions | All Rights Reserved</p>
<div style = "width:49%;color:#a1ad20;background-color:#e6eab7;display:inline-block">
<div class = "social-media-image-container"><a href = ""><img src = "/facebook.svg" class = "social-media-image"></img></a></div>
<div class = "social-media-image-container"><a href = ""><img src = "/twitter.png" class = "social-media-image"></img></a></div>
<div class = "social-media-image-container"><a href = ""><img src = "/insta-icon.png" class = "social-media-image" ></img></a></div></div>
</div>
</footer>

</html>



`);})
app.use('/.netlify/functions/home',router)

module.exports.handler = serverless(app);
