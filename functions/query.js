var aws = require('aws-cdk-lib');
const handler = new NodejsFunction(this, 'DSQLHandler', {
  runtime: Runtime.NODEJS_22_X,
  handler: 'handler',
  entry: '/login.js',
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

