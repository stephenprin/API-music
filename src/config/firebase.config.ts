const admin = require("firebase-admin");

const serviceAccount = require("../../dist/config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


export default admin;