import { CoreController }    from '../core/core.controller';

export class LeaguesController extends CoreController {
  constructor (Restangular, $scope, $state) {
    'ngInject';
    super(Restangular, $scope);
    this.state =  $state;

    this.parent.setOptions({
      title:'Leagues',
      addButton:{
        click:()=>{
          $state.go('newLeague');
        }
      }
    });

    this.fetchEntities('leagues')
  }

}
