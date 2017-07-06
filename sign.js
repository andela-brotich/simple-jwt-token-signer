const fs = require('fs');
const jwt = require('jsonwebtoken');

// sign with RSA SHA256
var cert = fs.readFileSync('certs/private-test.key');  // get private key

// replace with cliam for the user
var claims = {
  UserInfo: {
    id: '-KXGy1MT1oimjQgFim9M',
    email: 'test-user-fellow@andela.com',
    first_name: 'Test',
    last_name: 'Fellow',
    name: 'Test Fellow',
    picture: 'https://lh6.googleusercontent.com/-YakgRY0cfWo/AAAAAAAAAAI/AAAAAAAAABU/QddjiuJ7JdI/photo.jpg?sz=50',
    roles: {
      Andelan: '-KiihfZoseQeqC6bWTau',
      Fellow: '-KXGy1EB1oimjQgFim6C'
    }
  }
};

var token = jwt.sign(claims, cert, {
  algorithm: 'RS256',
  expiresIn: '1y'
});

console.log('== Token: ============================\n');
console.log(token);
console.log('\n=======================================\n');