const config = new Buffer(process.env.FIREBASE_ADMIN_CONFIG, 'base64');
const configJson = JSON.parse(config);

module.exports = async (req, res) => {
  res.json({
    body: configJson
  })
}