import { CoreController }    from '../core/core.controller';

export class PlayersController extends CoreController {
  constructor (Restangular) {
    'ngInject';
    super(Restangular);

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
