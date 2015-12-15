import { CoreController }    from '../core/core.controller';

export class TeamsController extends CoreController {
  constructor (Restangular, $scope, $state) {
    'ngInject';
    super(Restangular, $scope);

    this.state = $state;

    this.parent.setOptions({
      addButton:{ click:()=>{ $state.go('newTeam'); } }
    });

    this.fetchEntities('teams')
  }

  openDetail(id){
    this.state.go('team', {id:id});
  }
}
