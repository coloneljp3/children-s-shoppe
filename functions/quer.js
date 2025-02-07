var lambda = require('aws-cdk-lib')
var path = require('path')

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
