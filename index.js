const { google } = require('googleapis');
const express = require('express');
const app = express();
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const axios = require('axios');

const nearAPI = require("near-api-js");
const { connect } = nearAPI;
const { KeyPair } = require('near-api-js');
const { keyStores } = nearAPI;
require('dotenv').config();

// function to convert an email string to accountID
async function convertEmailToTestnet(email) {
    // Use a regular expression to replace "@gmail.com" with ".testnet"
    const testnetAccount = email.replace(/@gmail\.com$/i, '.testnet');
    return testnetAccount;
}

// checks if an Email has an account ID atteached to it 
async function checkAccount(accountId) {
    const myKeyStore = new keyStores.InMemoryKeyStore();
    const PRIVATE_KEY = process.env.PRIVATE_KEY;
    // creates a public / private key pair using the provided private key
    const creatorkeyPair = KeyPair.fromString(PRIVATE_KEY);
    await myKeyStore.setKey(process.env.NETWORK, process.env.ACCOUNTID, creatorkeyPair);

    const connectionConfig = {
        networkId: "testnet",
        keyStore: myKeyStore, // first create a key store 
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
    };
    const nearConnection = await connect(connectionConfig);
    try {
      await nearConnection.viewAccount(accountId);
      // Account exists
      return true;
    } catch (error) {
      // Account doesn't exist
      return false;
    }
}

// async function verify(token) {
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: process.env.CLIENT_ID,  // replace with your Client ID
//         clockTolerance: 600
//     });

//     const payload = ticket.getPayload();
//     const email = payload['email'];
//     const userid = payload['sub'];
//     // If request specified a G Suite domain:
//     // const domain = payload['hd'];
    
//     return(email);
// }

// uses the NEAR-JS-API to create a new account with the email as the accountID
async function createAccount(accountID) {
    const myKeyStore = new keyStores.InMemoryKeyStore();
    const PRIVATE_KEY = process.env.PRIVATE_KEY;
    // creates a public / private key pair using the provided private key
    const creatorkeyPair = KeyPair.fromString(PRIVATE_KEY);
    await myKeyStore.setKey(process.env.NETWORK, process.env.ACCOUNTID, creatorkeyPair);

    const connectionConfig = {
        networkId: "testnet",
        keyStore: myKeyStore, // first create a key store 
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
    };
    
    const nearConnection = await connect(connectionConfig);
    let keyPair = KeyPair.fromRandom('ed25519');
    const pair = keyPair.toString();
    let publicKey = keyPair.publicKey.toString();
    await nearConnection.createAccount(
        accountID, // new account name
        publicKey, // public key for new account
    );

    await myKeyStore.setKey("testnet", accountID, keyPair);

    const resultObject = {
        accountID: accountID,
        pair: pair,
        publicKey: publicKey
    };

    // Convert the object into a JSON string
    const jsonString = JSON.stringify(resultObject);

    // Return the JSON string
    return jsonString;
}

// 
async function functionCall(data) {
    try {
        const response = await axios.post('http://localhost:3030/relay', data);
        console.log('Status:', response.status);
        console.log('Data:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

app.get('/logIn', async (req, res) => {
    try {
        // probably pass auth token not just email
        // to verify that request is coming from a gmail login
        const email = req.query.email;
        const accountID = await convertEmailToTestnet(email);
        const accountExists = await checkAccount(accountID);
        if (accountExists == false) {
            const accountDetails = await createAccount(accountID);
            res.send(`Authenticated Successfully with token ${email}`);
        } else { 
            res.send(`Authenticated Successfully with token ${email}`);
        }
        console.log(accountDetails);
    } catch (err) {
      res.status(500).send(`Error while trying to retrieve access token: ${err.message}`);
    }
});

app.get('/callFunction', async (req, res) => {
    try {
        const data = {
            accountID: req.body.accountID,
            contractID: req.body.contractID,
            methodName: req.body.methodName,
            args: req.body.args
        };
        const functionCallJSON = JSON.stringify(data);
        functionCall(functionCallJSON);
    } catch (error) {
        res.status(500).send(`Error while trying to retrieve access token: ${err.message}`);
    }
})

app.listen(3000, () => {
  console.log('App is listening on port 3000')
});