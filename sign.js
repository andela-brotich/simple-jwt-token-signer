const fs = require('fs');
const jwt = require('jsonwebtoken');

// sign with RSA SHA256
var cert = fs.readFileSync('certs/private-test.key');  // get private key

// replace with cliam for the user
var claims = {
  UserInfo: {
    id: 'uuhfusbuhfb',
    email: 'emial@example.com',
    name: 'User Name',
    picture: 'http://example.com',
    roles: {
      rank: 'Student',
      level: '500'
    }
  }
};

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