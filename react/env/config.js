module.exports = {
'facebookAuth':
  {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    }
}