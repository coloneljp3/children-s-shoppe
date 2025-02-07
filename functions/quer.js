var aws = require('aws-cdk-lib/aws-lambda')

const handler = new aws.NodejsFunction(this, 'DSQLHandler', {
  STRICT_SSL:false,
  runtime: aws.Runtime.NODEJS_18_X,
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
