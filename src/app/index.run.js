export function runBlock ($log, $rootScope, $location, store, jwtHelper, auth, Restangular) {
  'ngInject';
  $log.debug('runBlock end');
  Restangular.setDefaultHttpFields({cache: false});
  auth.hookEvents();

  $rootScope.$on('$locationChangeStart', function() {
    var token = store.get('token');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          auth.authenticate(store.get('profile'), token);
        }
      } else {
        // Either show the login page or use the refresh token to get a new idToken
        $location.path('/');
      }
    }
  });
}
