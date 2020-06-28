let admin = require('firebase-admin');
const config = new Buffer.from(process.env.FIREBASE_ADMIN_CONFIG, 'base64');
const configJson = JSON.parse(config);

admin.initializeApp({
  credential: admin.credential.cert(configJson),
  databaseURL: 'https://online-cv-57b2e.firebaseio.com'
});

let agency = { uid: 'sample', token: 'test' }

module.exports = async (req, res) => {
  if (req.query.token !== agency.token) {
    res.status(400).send({ message: 'Invalid token' });
  } else if (req.query.agency !== agency.uid) {
    res.status(400).send({ message: 'Invalid agency' });
  } else {
    const customToken = await admin.auth().createCustomToken(req.query.agency)
    res.status(200).send({ token: customToken });
  }
}
