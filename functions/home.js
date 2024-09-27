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
<!DOCTYPE html>
<html>
<link rel = "stylesheet" href = "/styles.css"/>
<script type = "text/javascript" src = "/functions.js"></script>

<header id = "header">
<img id = "logo" src=""/>
<nav id = "top-of-page-nav-bar">
<form onmouseover = "backColorChange('home-button','#63ba11','white');borderBottomAppear('home-button','white','black')" id = "home-button" action = "/home" class = "top-of-page-nav-bar-form" method = "POST"><button class = "top-of-page-nav-bar-form-button" type = "submit">Home</button></form>
<form onmouseover = "backColorChange('services-button','#63ba11','white');borderBottomAppear('services-button','white','black')"  action = "/services" id = "services-button" class = "top-of-page-nav-bar-form" method = "POST"><button class = "top-of-page-nav-bar-form-button" type = "submit">Services</button></form>
<form onmouseover = "backColorChange('contact-button','#63ba11','white');borderBottomAppear('contact-button','white','black')"  action = "/contact" id = "contact-button"class = "top-of-page-nav-bar-form" method = "POST"><button class = "top-of-page-nav-bar-form-button" type = "submit">Contact</button></form>
<form onmouseover = "backColorChange('hiring-button','#63ba11','white');borderBottomAppear('hiring-button','white','black')"  action = "/hiring" id = "hiring-button"class = "top-of-page-nav-bar-form" method = "POST"><button class = "top-of-page-nav-bar-form-button" type = "submit">Hiring</button></form>

</nav>

<span style = "width:30px;height:30px">

<svg style = "width:inherit;height:inherit">
<polyline points = "0 0 30 0" stroke = "black" fill = "none" stroke-width="5"></polyline>
<polyline points = "0 15 30 15" stroke = "black" fill = "none" stroke-width="5"></polyline>
<polyline points = "0 30 30 30" stroke = "black" fill = "none" stroke-width="5"></polyline>

</svg></span>

</header>



<body>
<div style = "background:no-repeat url();width:100%;height:300px;">

<h1 style = "text-align:center;font-size:3em;font-family:Roboto">Welcome to the Best Children's Boutique Clothing Store in Ruston, LA!</h1>

<div style = "margin:auto;width:50%;text-align:center">
<svg onclick = "

var width = document.getElementById('search');
if(width.style.width == '0px'){
width.style.width = '350px';
}
else{
width.style.width = '0px'}


" style = "width:30px;height:20px;display:inline-block;">
<circle cx = 8 cy = 8 stroke-width = 3 stroke = "black" fill = "none" r = 6></circle>
<polyline points = "12 12 20 20 " stroke-width = 3 stroke = "black" fill = "none"></polyline>
</svg>
<input placeholder = "Search for info Sundown Tavern"  onkeyup = "searchReq()" id  = "search" type = "search" />
<div style = "position:relative"> 
<div id = "options"></div>
</div>
</div>
<script>
window.onload = (event) =>{
document.getElementById('search').style.width = '350px';
}
window.onclick = (event) =>{
document.getElementById('options').innerHTML = '';
}
    
var search_list = {
"HOME":"https://childrensshoppe.netlify.app/home",
"SERVICES":"https://childrensshoppe.netlify.app/services",
"CONTACT":"https://childrensshoppe.netlify.app/contact",
"HIRING":"https://childrensshoppe.netlify.app/hiring"
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
but.style.fontFamily = 'Helvetica'
but.style.color = "white";
but.style.borderColor = "#63ba11"
but.style.backgroundColor = "#63ba11";
but.style.borderRadius = "10px"
but.style.margin = "0px";
but.style.display = "block"
but.style.height = "50px";
but.style.width= "275px";
a.style.position = "absolute";
    elem.style.visibility = "visible";
    a.style.visibility = "visible";
    elem.style.height = "50px";
    a.style.height = "50px" ;
    a.href = list[i];
	a.append(but);
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

	#options{position:absolute;z-index:1}
#search{
border-radius:25px;
font-family:Roboto;
width:50%;
display:inline-block;
height:50px;
top:50%;
margin:auto;
text-align:center;
border-color:white;
transition:width 1s;
border-style:solid}
</style>
</div>
<div class = "body-div" id = "body-div-1">
<div class = "body-div" style = "margin:auto">
  

</div>

</div>

<div id = "body-div-2" class = "body-div">
<div style = "width:50%;display:inline-block"">

Call to Action
</div>
<div style = "width:50%;display:inline-block">
<h2 class = "body-div-h2">What We Do</h2>
<p class = "body-div-p">Since 2000, the Children's Shoppe has provided the best children's apparel for an affordable price. No matter the occassion or circumstance, we can help your child look their best.</p>
</div>

</div>
<div id = "body-div-3" class = "body-div">
<div style = "width:50%;display:inline-block"><h2 class = "body-div-h2">Heading 2</h2>
<p class = "body-div-p">P</p></div>
<div style = "width:50%;display:inline-block"">

Call to Action
</div>

</div>
<div id = "body-div-4"  class = "body-div">
<div style = "width:50%;display:inline-block"">

Call to Action
</div>
<div style = "display:inline-block:width:50%"><h2 class = "body-div-h2">Heading 2</h2>
<p class = "body-div-p">P</p>
</div>

</div>


</body>

<footer id = "footer">
<span class = "footer-span" id = "footer-span-1">
<section class = "footer-span-section" id = "footer-span-section-1">dddd</section>
<section class = "footer-span-section" id = "footer-span-section-2">dddd</section>
<section class = "footer-span-section" id = "footer-span-section-3">ddd</section>
<section class = "footer-span-section" id = "footer-span-section-4">ddd</section>

</span>

<span class = "footer-span" id = "footer-span-2">
<section class = "footer-span-section" id = "footer-span2-section-1">ddddd</section>
<section class = "footer-span-section" id = "footer-span2-section-2">dddd</section>
<section class = "footer-span-section" id = "footer-span2-section-3">dd</section>
<section class = "footer-span-section" id = "footer-span2-section-4">dddd</section>

</span>

<span class = "footer-span" id = "footer-span-3">
<section class = "footer-span-section" id = "footer-span3-section-1">dd</section>
<section class = "footer-span-section" id = "footer-span3-section-2">dd</section>
<section class = "footer-span-section" id = "footer-span3-section-3">dd</section>
<section class = "footer-span-section" id = "footer-span3-section-4">dd</section>

</span>


</footer>

</html>


`)

  
})

//router.post('/',(req,res)=>{
//var user = req.body.user;
//var email_user = req.body.email_user;
//var email_psw = req.body.email_psw;
//if(user == "undefined"){
//res.send()
  
//}
  //else{
//res.send("")
    
  //}
  
//})

//router.get('/',(req,res)=>{})

app.use('/.netlify/functions/home',router)

module.exports.handler = serverless(app);
