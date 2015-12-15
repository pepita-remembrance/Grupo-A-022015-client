import { CoreController }    from '../core/core.controller';

export class LeaguesController extends CoreController {
  constructor (Restangular, $scope) {
    'ngInject';
    super(Restangular, $scope);

    this.parent.setOptions({
      title:'Leagues',
      addButton:{
        onCLick:()=>{

        }
      }
    });

    this.fetchEntities('leagues')
  }

}
