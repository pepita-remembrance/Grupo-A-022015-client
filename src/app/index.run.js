export function runBlock ($log, $rootScope, $location, store, jwtHelper, auth, Restangular,  $mdToast) {
  'ngInject';
  $log.debug('runBlock end');
  const playerIcon = {
    "GOALKEEPER":"assets/svg/ic_gradient_white_18px.svg",
    "DEFENDER":"assets/svg/ic_security_white_18px.svg",
    "MIDFIELDER":"assets/svg/ic_compare_arrows_white_18px.svg",
    "FORWARD":"assets/svg/ic_forward_white_18px.svg"
  };

  Restangular.setDefaultHttpFields({cache: false});
  auth.hookEvents();

  Restangular.setErrorInterceptor(function(response) {
    if(response.status >= 400) {

      var toast = $mdToast.simple()
        .textContent(response.data.message)
        .action('ERROR')
        .highlightAction(false);
      $mdToast.show(toast);

      return false; // error handled
    }

    return true; // error not handled
  });

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
  Restangular.extendModel('players', (model)=> {
    model.image =  playerIcon[model.position];
    return model;
  });
}
