let admin = require("firebase-admin");
require("dotenv").config();

let serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.databaseURL,
});

const db = admin.firestore();
module.exports = { admin, db };
