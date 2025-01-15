'use strict'
const mysql = require('mysql2');
const express = require('express');
const router = express.Router();
const app = express();
const serverless = require('serverless-http');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
router.post('/',(req,res)=>{
var connection = mysql.createConnection(process.env.DATABASE_URL);
var user = req.body.User;
var psw = req.body.psw;
var cell = req.body.cell;
var email_user = req.body.email_user;
var email_psw = req.body.email_psw
const Signup = connection.query(`Select COUNT(*) from Clientele where username = ? or pasword = ?`,[user,psw],(err,results)=>{var count = results[0]["count(*)"]; if(count == 0){connection.query(`Insert Into Clientele(username,pasword,cell,email,email_psw) values(?,?,?,?,?)`,[user,psw,cell,email_user,email_psw]);connection.query(`SELECT start_date,time FROM Records`,[user,psw],(err,result,fields) => {var z = [];for(let i of result){var b = i["start_date"] +":"+i["time"] + "<br>";z.push(b)};connection.query(`SELECT services FROM Records WHERE username = ?`,[user],(err,results,fields)=>{let a = [];for(let i of results){a.push(i["services"]+"<br>");};})})}});
Signup;




}
        )


app.use("/.netlify/functions/create_sub",router);

module.exports.handler = serverless(app);
