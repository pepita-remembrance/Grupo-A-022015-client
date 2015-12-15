export function runBlock ($log,Restangular) {
  'ngInject';
  $log.debug('runBlock end');
  const playerIcon = {
    "GOALKEEPER":"assets/svg/ic_gradient_white_18px.svg",
    "DEFENDER":"assets/svg/ic_security_white_18px.svg",
    "MIDFIELDER":"assets/svg/ic_compare_arrows_white_18px.svg",
    "FORWARD":"assets/svg/ic_forward_white_18px.svg"
  };

  Restangular.setDefaultHttpFields({cache: false});
  Restangular.extendModel('players', (model)=> {
    model.image =  playerIcon[model.position];
    return model;
  });
}
