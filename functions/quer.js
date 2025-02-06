var aws = require('@aws-cdk/aws-lambda-nodejs');
const handler = new aws.NodejsFunction(this, 'DSQLHandler', {
  handler: 'handler',
  code:"",
  entry:'/var/task/.netlify/functions/login.js',
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

