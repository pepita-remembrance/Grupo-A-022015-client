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
  constructor ($state, auth, store) {
    'ngInject';

    this.$state = $state;
    this.auth = auth;
    this.store = store;
    this.entries = [
      {
        name:'Players',
        state:'players',
        icon:''
      },{
        name:'Teams',
        icon:'',
        state:'teams'
      },{
        name:'Leagues',
        icon:'',
        state:'leagues'
      }
    ]
  }

  logout() {
    this.auth.signout();
    this.store.remove('profile');
    this.store.remove('token');
    this.$state.go('login');
  }

  goToState(stateName){
    this.$state.go(stateName);
  }
}
