export function authConfig (authProvider) {
  'ngInject';
  authProvider.init({
    domain: 'pepita.auth0.com',
    clientID: 'uYjeLTz1Jg7JFuNzmdCKvRZndOBErxPW',
    loginState: 'login'
  });
}
