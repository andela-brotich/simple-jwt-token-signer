## utility to create toke for testing

- create a valid token using `RS256` algorithm to sign the generated token

## steps
1. Create public/private pairs

#### Using OpenSSL
The basics command line steps to generate a private and public key using OpenSSL are as follows:

Step 1: generates a private key
```bash
$ openssl genrsa -out privatekey.pem 1024
```

Step 2: creates a X509 certificate (.pem file) containing your public key
```bash
$ openssl req -new -x509 -key privatekey.pem -out publickey.pem -days 1825
```

src: [https://developer.xero.com/documentation/api-guides/create-publicprivate-key](https://developer.xero.com/documentation/api-guides/create-publicprivate-key)


2. Prepare data for signing
edit claims object in `sign.js` to include the data to be signed

3. Create a new token

```bash
npm run sign
```

#### example output

```bash
$ npm run sign
> jwt-creator@1.0.0 sign ./jwt-creator
> node sign.js

== Decoded Token: ============================

{ UserInfo:
   { id: 'uuhfusbuhfb',
     email: 'emial@example.com',
     name: 'User Name',
     picture: 'http://example.com',
     roles: { rank: 'Student', level: '500' } },
  iat: 1499332144,
  exp: 1530889744 }

== Token: ============================

eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJpZCI6InV1aGZ1c2J1aGZiIiwiZW1haWwiOiJlbWlhbEBleGFtcGxlLmNvbSIsIm5hbWUiOiJVc2VyIE5hbWUiLCJwaWN0dXJlIjoiaHR0cDovL2V4YW1wbGUuY29tIiwicm9sZXMiOnsicmFuayI6IlN0dWRlbnQiLCJsZXZlbCI6IjUwMCJ9fSwiaWF0IjoxNDk5MzMyMTQ0LCJleHAiOjE1MzA4ODk3NDR9.MYyJ2O6OgFFuSjh0O-G-sSa0Bej9xwpB-6NHu_fS0kjWQjxEY3qA70BBjDlle95-0cFIpm3_jwhGYZdSbaIla2brgvOalfP8ppl1GwPzdRJG1eJCOoXBauzCbP--I5LlSl0IxMb_aH0yqZM1bIshEEJ0fCYre9eJLxpK3XM6dnl-ivnWiC_zGgd8N71AbfnKh-_ndRS9fjFu4BHlcSKIi7UhUHE2BcvI3ZTJYngcFIN4834irE5ux5zAz8shYWRsPTMkFNnQ6iaB0hagSXuZunirkvM9c6tpZGgjsKWCLOPMjlAwjiE6DMnoMUUXiFRZAwZP1UM2yEadrg2fO0EP0g

=======================================
```