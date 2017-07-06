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

example output

            = Token: ============================

            eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJpZCI6Ii1LWEd5MU1UMW9pbWpRZ0ZpbTlNIiwiZW1haWwiOiJ0ZXN0LXVzZXItZmVsbG93QGFuZGVsYS5jb20iLCJmaXJzdF9uYW1lIjoiVGVzdCIsImxhc3RfbmFtZSI6IkZlbGxvdyIsIm5hbWUiOiJUZXN0IEZlbGxvdyIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLVlha2dSWTBjZldvL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUJVL1FkZGppdUo3SmRJL3Bob3RvLmpwZz9zej01MCIsInJvbGVzIjp7IkFuZGVsYW4iOiItS2lpaGZab3NlUWVxQzZiV1RhdSIsIkZlbGxvdyI6Ii1LWEd5MUVCMW9pbWpRZ0ZpbTZDIn19LCJpYXQiOjE0OTkzMjg0MDQsImV4cCI6MTUzMDg4NjAwNH0.KsMzL0gg6lr9gu-wm7cLC6Vr2Z-Ie-sTm1tbUPIwX_ba5-I4zci8O9thS--gINlqvwTR6IbszfgYwujfDHdyBtuou6cWJvSKL5hVHFizKY51AFHWlDz_tQDxvvVVpmdXra73IYpMO1AJq8lDjB2Im11RujrdOL48rHMV29jcAndZMyXGDBuurhWAIdWc7QrlFM-BB4ENIOgbMTm4UsX0q0EOCaEmOMBTP92p1_x6Pgaf-X8N48ffwpvLSwNkkAxikSz5FXYl18fabl8xt60BE_yMY0BaMZQ0Bwqch7HKyDfWU903mvklhjhADRZIFvF-ByXTv5JevonCTO3Zjth38g

            =======================================

