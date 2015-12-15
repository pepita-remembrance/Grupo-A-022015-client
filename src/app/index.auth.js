export function authConfig (authProvider, $httpProvider, jwtInterceptorProvider) {
  'ngInject';
  authProvider.init({
    domain: 'pepita.auth0.com',
    clientID: 'uYjeLTz1Jg7JFuNzmdCKvRZndOBErxPW',
    loginState: 'login'
  });

  jwtInterceptorProvider.tokenGetter = ['store', function(store) {
    return store.get('token');
  }];

  $httpProvider.interceptors.push('jwtInterceptor');
}
