import { CoreController }    from '../core/core.controller';

export class PlayersController extends CoreController {
  constructor (Restangular, $scope) {
    'ngInject';
    super(Restangular, $scope);

    this.parent.setOptions({
      title:'Players'
    });

    this.fetchEntities('players')
  }
}
