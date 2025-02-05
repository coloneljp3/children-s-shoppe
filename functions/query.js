import * from 'aws-cdk';
const { DSqlSigner } = require('@aws-sdk/dsql-signer')
var assert = require('node:assert')
var pg = require('pg')
const handler = new NodejsFunction(this, 'DSQLHandler', {
  runtime: Runtime.NODEJS_22_X,
  handler: 'handler',
  entry: 'lambda/handler.ts',
  memorySize: 1024,
  code:  function example(clusterEndpoint) {
  let client;
  const region = "us-east-1";
  try {
    // The token expiration time is optional, and the default value 900 seconds
    const signer = new DsqlSigner({
      hostname: clusterEndpoint,
      region,
    });
    const token = await signer.getDbConnectAdminAuthToken();
    client = new pg.Client({
      host: clusterEndpoint,
      user: "admin",
      password: token,
      database: "postgres",
      port: 5432,
      // <https://node-postgres.com/announcements> for version 8.0
      ssl: true
    });

    // Connect
    await client.connect();

    // Create a new table
    await client.query(`CREATE TABLE IF NOT EXISTS Clients (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      username VARCHAR(30) NOT NULL,
      password VARCHAR(80) NOT NULL,
      email VARCHAR(40)
      cell varchar(12)
      profile_information varchar(255)
    )`);

    // Insert some data
    await client.query("INSERT INTO Clients VALUES(?,?,?)",[user,psw,email_user]
    );


  } catch (error) {
    console.error(error);
    raise
  } finally {
    client.end()
  }
  Promise.resolve()
}
example("jeabtzew5q42xhj32swa5o3j3u.dsql.us-east-1.on.aws");
  bundling: {
    bundleAwsSDK: true,
  },
});

handler.addToRolePolicy(
  new cdk.aws_iam.PolicyStatement({
    effect: cdk.aws_iam.Effect.ALLOW,
    actions: ['dsql:DbConnectAdmin'],
    resources: ['*'],
  })
);

module.exports.handler =  { handler }
