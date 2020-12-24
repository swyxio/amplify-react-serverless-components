/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_DYNAMOA44CAB8E_ARN
	STORAGE_DYNAMOA44CAB8E_NAME
Amplify Params - DO NOT EDIT */const awsServerlessExpress = require('aws-serverless-express');
const app = require('./server/app.server');

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
