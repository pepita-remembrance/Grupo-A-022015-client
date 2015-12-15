import { CoreController }    from '../core/core.controller';

export class LeagueController extends CoreController {
  constructor(Restangular, $scope, $stateParams) {
    'ngInject';
    super(Restangular, $scope);

    this.parent.setOptions({});
    this.selectedItem = null;
    this.searchText = "";

    this.players = [];

    this.league = {
      name: '',
      stages: []
    };

    this.fetchEntities('teams');
    this.fetchEntities('players');
    Restangular.one('leagues', $stateParams.id).get().then((entity)=> {
      this.league = entity;
    });
  }

  querySearch(query, target) {
    return query ? target.filter(this.createFilterFor(query)) : [];
  }

  playerSearch(searchText) {
    const players = this.players.filter((aPlayer)=>{
      return aPlayer.name.indexOf(searchText) >= 0
    });
    return players;
  }

  playerSearchTextChange(searchText) {

  }

  addNewStage(){
    this.league.stages.push({ goals:[] });
  }

  selectedPlayerChange(item, stage) {
    if(!item) return;
    if(!stage.goals.length ) stage.goals = [];
    stage.goals.push({player:item, quantity:0});
  }

  createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return (team) => {
      return (team.name.toLowerCase().indexOf(lowercaseQuery) >= 0)
    };
  }
}
