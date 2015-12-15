import { CoreController }    from '../core/core.controller';

export class TeamsController extends CoreController {
  constructor (Restangular, $scope) {
    'ngInject';
    super(Restangular, $scope);

    this.teams = [];
    this.parent.setOptions({
      addButton:{
        onCLick:()=>{

        }
      }
    });

    this.findTeams();
  }

  findTeams(){
    this.api.all('teams').getList()
      .then((teams)=> {
        this.teams = teams;
      });
  }
}
