// import history from '../history'
import auth0 from 'auth0-js'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'abs-test.auth0.com',
    clientID: 'O2PGm9flUvIuS3fpr1BFDlKrD1SMSUzu',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://abs-test.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  })

  login() {
    this.auth0.authorize()
  }
}
