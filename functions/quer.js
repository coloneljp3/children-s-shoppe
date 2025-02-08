var lambda = require('aws-cdk-lib')
var run = require('@aws-cdk/aws-lambda-nodejs')
var path = require('path')


const handler = new lambda.NodejsFunction(this, 'DSQLHandler', {
  runtime: run.Runtime.NODEJS_20_X,
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
