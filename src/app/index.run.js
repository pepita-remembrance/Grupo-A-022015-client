export function runBlock ($log, auth, Restangular) {
  'ngInject';
  $log.debug('runBlock end');
  Restangular.setDefaultHttpFields({cache: false});
  auth.hookEvents();	
}
