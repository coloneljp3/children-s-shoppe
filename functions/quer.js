var aws = require('aws-cdk-lib')
const handler = new aws.NodejsFunction(this, 'DSQLHandler', {
  runtime: aws.Runtime.NODEJS_20_X,
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
