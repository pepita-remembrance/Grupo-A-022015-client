export class ContainerController {
  constructor($scope, $mdSidenav) {
    'ngInject';

    this.sideNav = $mdSidenav;
    this.options = {};

    $scope.setOptions = (opt)=>{
      this.options = opt;
    };

    this.isDrawerOpen = true;

    this.menu = [
      {
        link: '',
        title: 'Dashboard',
        icon: 'dashboard'
      },
      {
        link: '',
        title: 'Friends',
        icon: 'group'
      },
      {
        link: '',
        title: 'Messages',
        icon: 'message'
      }
    ];
    this.alert = '';
    this.title = 'Title';

  }

  setTitle(aTitle) {
    this.title = aTitle;
  }

  togleDrawer(){
    //this.sideNav('left').toggle();
    this.isDrawerOpen = !this.isDrawerOpen ;
  }


}
