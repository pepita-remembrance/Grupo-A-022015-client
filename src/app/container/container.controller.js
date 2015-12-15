export class ContainerController {
  constructor($scope) {
    'ngInject';

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
    this.isDrawerOpen = !this.isDrawerOpen ;
  }


}
