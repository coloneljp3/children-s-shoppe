var runtime = require('aws-cdk-lib/aws-lambda').Runtime.NODEJS_22_X
var aws = require('aws-cdk-lib')
const handler = new aws.NodejsFunction(this, 'DSQLHandler', {
  runtime: runtime,
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
