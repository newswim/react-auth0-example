// import history from '../history'
import auth0 from 'auth0-js'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'abs-test.auth0.com',
    clientID: 'GNXNW4dcw0C10doA6AX1yPXERiN4flev',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://abs-test.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  })

  login() {
    this.auth0.authorize()
  }
}
