import { CoreController }    from '../core/core.controller';

export class TeamsController extends CoreController {
  constructor (Restangular, $scope) {
    'ngInject';
    super(Restangular, $scope);

    this.parent.setOptions({
      addButton:{
        onCLick:()=>{

        }
      }
    });

    this.fetchEntities('teams')
  }

}
