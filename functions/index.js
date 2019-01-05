const admin = require('firebase-admin')
const functions = require('firebase-functions')
const createUser = require('./createUser')
const requestOTP = require('./requestOTP')
const serviceAccount = require('./keys/pk.json')
const verifyOTP = require('./verifyOTP')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-pw-f02ca.firebaseio.com"
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// exports.baiWorld = functions.https.onRequest((request, response) => {
//    response.send("bai from Firebase!");
//  });

exports.createUser = functions.https.onRequest(createUser)
exports.requestOTP = functions.https.onRequest(requestOTP)
exports.verifyOTP = functions.https.onRequest(verifyOTP)