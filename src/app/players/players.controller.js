import { CoreController }    from '../core/core.controller';

export class PlayersController extends CoreController {
  constructor (Restangular, $scope) {
    'ngInject';
    super(Restangular, $scope);

    this.parent.setOptions({
      title:'Players'
    });

    this.initializeEmptyPlayer();

    this.fetchEntities('players')
  }

  saveNewPlayer(){
    this.newPlayer.save();
    this.players.push(this.newPlayer);
    this.initializeEmptyPlayer();
  }

  initializeEmptyPlayer(){
    this.newPlayer = this.api.restangularizeElement(null, {
      name:'',
      position:'',
      realWorldTeam:''
    }, 'players')
  }
}
