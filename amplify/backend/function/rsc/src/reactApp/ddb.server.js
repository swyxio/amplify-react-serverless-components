// // https://github.com/facebook/react/blob/5fd9db732dff1b99c096bffef9a565b594c788de/packages/react-pg/src/ReactPostgres.js
// import {unstable_getCacheForType} from 'react';


// const AWS = require('aws-sdk')
// const docClient = new AWS.DynamoDB.DocumentClient();
// const util = require('util');
// const db = util.promisify(docClient.scan)
// var params = {
//   TableName: process.env.STORAGE_FORMTABLE_NAME // TODO: UPDATE THIS WITH THE ACTUAL NAME OF THE FORM TABLE ENV VAR (set by Amplify CLI)
// }


// const Pending = 0;
// const Resolved = 1;
// const Rejected = 2;


// function toResult(thenable) {
//   const result = {
//     status: Pending,
//     value: thenable,
//   };
//   thenable.then(
//     value => {
//       if (result.status === Pending) {
//         const resolvedResult = (result);
//         resolvedResult.status = Resolved;
//         resolvedResult.value = value;
//       }
//     },
//     err => {
//       if (result.status === Pending) {
//         const rejectedResult = (result);
//         rejectedResult.status = Rejected;
//         rejectedResult.value = err;
//       }
//     },
//   );
//   return result;
// }

// function readResult(result) {
//   if (result.status === Resolved) {
//     return result.value;
//   } else {
//     throw result.value;
//   }
// }
// export function Pool(options) {


//   docClient.scan(params, function(err, data) {
//     if (err) res.json({ err })
//     else res.json({ data })
//   })
//   this.db = db
//   // Unique function per instance because it's used for cache identity.
//   this.createResultMap = function() {
//     return new Map();
//   };
// }


// Pool.prototype.query = function() {
  
//   const pool = this.pool;
//   const outerMap = unstable_getCacheForType(this.createResultMap);

//   let innerMap: NestedMap = outerMap;
//   let key = query;
//   if (values != null) {
//     // If we have parameters, each becomes as a nesting layer for Maps.
//     // We want to find (or create as needed) the innermost Map, and return that.
//     for (let i = 0; i < values.length; i++) {
//       let nextMap = innerMap.get(key);
//       if (nextMap === undefined) {
//         nextMap = new Map();
//         innerMap.set(key, nextMap);
//       } else if (!(nextMap instanceof Map)) {
//         invariant(
//           false,
//           'This query has received more parameters than the last time ' +
//             'the same query was used. Always pass the exact number of ' +
//             'parameters that the query needs.',
//         );
//       }
//       innerMap = nextMap;
//       // Postgres bindings convert everything to strings:
//       // https://node-postgres.com/features/queries#parameterized-query
//       // We reuse their algorithm instead of reimplementing.
//       key = prepareValue(values[i]);
//     }
//   }

//   let entry = innerMap.get(key);
//   if (!entry) {
//     const thenable = pool.query(query, values);
//     entry = toResult(thenable);
//     innerMap.set(key, entry);
//   } else if (entry instanceof Map) {
//     invariant(
//       false,
//       'This query has received fewer parameters than the last time ' +
//         'the same query was used. Always pass the exact number of ' +
//         'parameters that the query needs.',
//     );
//   }
//   return readResult(entry);
// };