var aws = require('aws-cdk-lib')
var lambda = require('aws-cdk-lib/aws-lambda-nodejs')
const handler = new lambda.NodejsFunction(this, 'DSQLHandler', {
  runtime: lambda.Runtime.NODEJS_20_X,
  handler: 'handler',
  entry:__dirname + "/login.js",
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
