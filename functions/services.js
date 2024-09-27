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
<link rel = "stylesheet" href = "/styles.css">
<header>
<meta></meta>
<nav id = "top-of-page-nav-bar">
<form class = "top-of-page-nav-bar-form" method = "POST"><button class = "top-of-page-nav-bar-form-button" type = "submit">Home</button></form>
<form class = "top-of-page-nav-bar-form" method = "POST"><button class = "top-of-page-nav-bar-form-button" type = "submit">Services</button></form>
<form class = "top-of-page-nav-bar-form" method = "POST"><button class = "top-of-page-nav-bar-form-button" type = "submit">Contact</button></form>
<form class = "top-of-page-nav-bar-form" method = "POST"><button class = "top-of-page-nav-bar-form-button" type = "submit">Hiring</button></form>

</nav>

</header>

<body>

<div class = "body-div" id = "body-div-1">

<h1 id = "body-div-1-heading-1"></h1>
</div>

<div id = "body-div-2" class = "body-div">
<h2 class = "body-div-h2"></h2>
<p class = "body-div-p"></p>
</div>
<div id = "body-div-3" class = "body-div">
<h2 class = "body-div-h2"></h2>
<p class = "body-div-p"></p>
</div>
<div id = "body-div-4"  class = "body-div">
<h2 class = "body-div-h2"></h2>
<p class = "body-div-p"></p>
</div>


</body>

<footer id = "footer">
<span id = "footer-span-1">
<section class = "footer-span-section" id = "footer-span-section-1"></section>
<section class = "footer-span-section" id = "footer-span-section-2"></section>
<section class = "footer-span-section" id = "footer-span-section-3"></section>
<section class = "footer-span-section" id = "footer-span-section-4"></section>

</span>

<span id = "footer-span-2">
<section class = "footer-span-section" id = "footer-span2-section-1"></section>
<section class = "footer-span-section" id = "footer-span2-section-2"></section>
<section class = "footer-span-section" id = "footer-span2-section-3"></section>
<section class = "footer-span-section" id = "footer-span2-section-4"></section>

</span>

<span id = "footer-span-3">
<section class = "footer-span-section" id = "footer-span3-section-1"></section>
<section class = "footer-span-section" id = "footer-span3-section-2"></section>
<section class = "footer-span-section" id = "footer-span3-section-3"></section>
<section class = "footer-span-section" id = "footer-span3-section-4"></section>

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

app.use('/.netlify/functions/services',router)

module.exports.handler = serverless(app);
