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

    this.$state = $state;
    this.entries = [
      {
        name:'Players',
        state:'players',
        icon:''
      },{
        name:'Teams',
        icon:'',
        state:'teams'
      }
    ]
  }

  goToState(stateName){
    this.$state.go(stateName);
  }
}
