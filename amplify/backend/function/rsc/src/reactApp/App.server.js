
const { forceSync } = require('node-force-sync')
const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient();

async function getAllDB() {
  const data = await docClient.scan({
    TableName: process.env.STORAGE_FORMTABLE_NAME // TODO: UPDATE THIS WITH THE ACTUAL NAME OF THE FORM TABLE ENV VAR (set by Amplify CLI)
  }).promise()
  return data
}
const syncAllDB = forceSync(getAllDB);


export default function App() {
  const data = syncAllDB()
  return (
    <div className="main">
      Hello from App.server.js
      <pre>
      {JSON.stringify(data, null, 2)}
      </pre>
      {/* <Temp /> */}
    </div>
  );
}
