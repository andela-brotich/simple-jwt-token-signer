const fs = require('fs');
const jwt = require('jsonwebtoken');

// sign with RSA SHA256
var cert = fs.readFileSync('certs/private-test.key');  // get private key
var CLAIMS_FILE_NAME = 'claims.json'

var claimsJsonString = fs.readFileSync('CLAIMS_FILE_NAME'); 

var claims = JSON.parse(claimsJsonString)
// replace with cliam for the user

var token = jwt.sign(claims, cert, {
  algorithm: 'RS256',
  expiresIn: '1y'
});

var decodedToken = jwt.decode(token);

console.log('== Decoded Token: ============================\n');
console.log(decodedToken);
console.log('\n== Token: ============================\n');
console.log(token);
console.log('\n=======================================\n');