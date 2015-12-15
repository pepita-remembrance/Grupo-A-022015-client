import { CoreController }    from '../core/core.controller';

export class LeagueController extends CoreController {
  constructor(Restangular, $scope, $stateParams) {
    'ngInject';
    super(Restangular, $scope);

    this.parent.setOptions({});
    this.selectedItem = null;
    this.searchText = "";

    this.players = [];

    this.api.all('players').getList()
      .then((players)=> {
        this.players = players;
      });

    this.league = {
      name:'',
      stages:[]
    };

    this.fetchEntities('teams');
    Restangular.one('leagues', $stateParams.id).get().then((entity)=> {
      this.league = entity;
    });
  }

}
