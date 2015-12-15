import { CoreController }    from '../core/core.controller';

export class TeamController extends CoreController {
  constructor (Restangular, $scope, $stateParams, $state) { 'ngInject';
    super(Restangular, $scope);

    this.state = $state;
    this.parent.setOptions({ });
    this.selectedItem = null;
    this.searchText = "";

    this.players = [];
    this.scores = [];

    this.api.all('players').getList()
      .then((players)=> {
        this.players = players;
      });

    if($stateParams.id){
      Restangular.one('teams', $stateParams.id).get().then((entity)=> {
        this.team = entity;
        this.team.customGET("results").then((scores)=>{
          this.scores = scores;
        });
      });
    }else{
      this.team = Restangular.restangularizeElement(null, {
        name:'',
        players:[],
        logoUrl:''
      }, 'teams')
    }


  }

  querySearch(query){
    return  query ? this.players.filter(this.createFilterFor(query)) : [];
  }

  createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return (player) => {
      return (player.name.toLowerCase().indexOf(lowercaseQuery) >= 0)
    };
  }

  goToLeague(id){
    this.state.go('leagues',{id:id});
  }

  getIconFor(position){
    return this.playerIcon[position];
  }
}
