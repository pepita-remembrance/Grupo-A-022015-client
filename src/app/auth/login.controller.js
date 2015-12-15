import { CoreController }    from '../core/core.controller';

export class LoginController {
  constructor ($scope, auth, store, $location) {
    'ngInject';

    auth.signin({}, (profile, token) => {
      // Success callback
      store.set('profile', profile);
      store.set('token', token);
      $location.path('/');
    }, () => {});
  }

}
