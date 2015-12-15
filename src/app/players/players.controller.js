import { CoreController }    from '../core/core.controller';

export class PlayersController extends CoreController {
  constructor (Restangular, $scope) {
    'ngInject';
    super(Restangular, $scope);

    this.players = [];

    this.findPlayers();
  }

  findPlayers(){
    this.api.all('players').getList()
      .then((players)=> {
        this.players = players;
      });
  }
}
