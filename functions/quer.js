var lambda = require('aws-cdk-lib')
var path = require('path')
var express = require('express');
var app = express();
var router = express.Router()
var serverless = require('serverless-http')
app.get('/',(req,res)=>{
res.send(lambda.Runtime)
  
})
const handler = new lambda.NodejsFunction(this, 'DSQLHandler', {
  runtime: lambda.Runtime.NODEJS_20_X,
  handler: 'handler',
  entry:path.resolve("childrensshoppe.netlify.app/.netlify/functions","/login.js"),
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
app.use('/.netlify/functions/quer',router)

module.exports.handler = serverless(app)
