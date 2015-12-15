export function runBlock ($log,Restangular) {
  'ngInject';
  $log.debug('runBlock end');
  Restangular.setDefaultHttpFields({cache: false});
}
