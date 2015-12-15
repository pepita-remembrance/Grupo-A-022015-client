export function DrawerDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/drawer/drawer.html',
    scope: {
      currentState: '='
    },
    controller: DrawerController,
    controllerAs: 'drawerCtrl',
    bindToController: true
  };

  return directive;
}

class DrawerController {
  constructor ($state) {
    'ngInject';

    this.entries = [
      {
        name:'Players',
        icon:'',
        onclick:()=>{$state.go('players')}
      },{
        name:'Teams',
        icon:'',
        onclick:()=>{$state.go('teams')}
      }
    ]
  }
}
