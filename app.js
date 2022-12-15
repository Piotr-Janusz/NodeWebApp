const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
app.use( express.static( __dirname + '/public' ));

const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

/*
const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: '7xtMrjY4MolkxaYoFep44egmvwYt0RmDnxUBitQL1U9p',
  }),
  serviceUrl: 'https://api.eu-gb.text-to-speech.watson.cloud.ibm.com',
  disableSslVerification: true,
});
*/

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


