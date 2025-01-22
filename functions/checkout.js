'use strict'
var mysql = require('mysql2')
var express = require('express')
var app = express()
var router = express.Router();
var serverless = require('serverless-http')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',(req,res)=>{
res.send(`



`)

})
 
app.use('/.netlify/functions/checkout',router)

module.exports.handler = serverless(app)
