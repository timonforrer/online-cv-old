let admin = require('firebase-admin');

// Load the base64 encoded configuration
const config = new Buffer.from(process.env.FIREBASE_ADMIN_CONFIG, 'base64');
// Create JSON from string
const configJson = JSON.parse(config);

// Initialize the firebase admin sdk using config
admin.initializeApp({
  credential: admin.credential.cert(configJson),
  databaseURL: 'https://online-cv-57b2e.firebaseio.com'
});

// Create the api interface
module.exports = async (req, res) => {
  // Get the parameters from the URL
  const {
    agency,
    token
  } = req.query;

  // Get all logins from firestore
  const loginSnapshot = await admin.firestore().collection('logins').get();
  // Create a formatted array from snapshot
  const logins = loginSnapshot.docs.map(doc => {
    return {
      agency: doc.id,
      ...doc.data()
    }
  });

  // Check if any item meets the specified parameters
  if (logins.some(login => login.agency === agency && login.token === token)) {
    // If applicable, send successful response with custom token used to authenticate the frontend
    const customToken = await admin.auth().createCustomToken(req.query.agency);
    res.status(200).send({ token: customToken });
  } else {
    // If not, send an error
    res.status(400).send({ message: 'Authentication failed. Check agency name and token' });
  }
}
