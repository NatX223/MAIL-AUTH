const { google } = require('googleapis');
const express = require('express');
const app = express();
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,  // replace with your Client ID
  process.env.API_SECRET,  // replace with your Client Secret
  'http://localhost:3000/callBack'  // replace with your redirect URI
);
 
const scopes = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
];

async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,  // replace with your Client ID
        clockTolerance: 600
    });

    const payload = ticket.getPayload();
    const email = payload['email'];
    const userid = payload['sub'];
    // If request specified a G Suite domain:
    // const domain = payload['hd'];
    
    return(email);
}

app.get('/googleSigIn', (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });
  res.redirect(url);
});

app.get('/callBack', async (req, res) => {
    try {
      const code = req.query.code;
      const { tokens } = await oauth2Client.getToken(code);
      oauth2Client.setCredentials(tokens);
      const idToken = tokens.id_token;  // This is your id_token
  
      // You can now pass idToken to your verify function
      const email = await verify(idToken);
      const accountId = await convertEmailToTestnet(email);
      const accountDetails = await createAccount(accountId);

      res.send(`Authenticated Successfully with token ${email}`);
      console.log(accountDetails);
    } catch (err) {
      res.status(500).send(`Error while trying to retrieve access token: ${err.message}`);
    }
  });

app.listen(3000, () => {
  console.log('App is listening on port 3000')
});
