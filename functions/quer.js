var express = require('express')
var app = express()
var serverless = require('serverless-http')
var bodyParser = require('body-parser')
var router = express.Router()
var aws = require('@aws-cdk/aws-lambda-nodejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
const handler = new aws.NodejsFunction(this, 'DSQLHandler', {
  handler: 'handler',
  code:"",
  entry:__dirname + '/login.js',
  memorySize: 1024,
  bundling: {
    bundleAwsSDK: true,
  },
});

handler.addToRolePolicy(
  new cdk.aws_iam.PolicyStatement({
    effect: cdk.aws_iam.Effect.ALLOW,
    actions: ['dsql:DbConnectAdmin'],
    resources: ['*']
  })
);

});
app.use('/.netlify/functions/quer',router)
module.exports.handler = serverless(app)
