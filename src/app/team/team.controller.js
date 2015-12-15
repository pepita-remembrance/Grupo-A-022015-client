import { CoreController }    from '../core/core.controller';

export class TeamController extends CoreController {
  constructor (Restangular, $scope, $stateParams) { 'ngInject';
    super(Restangular, $scope);

    this.parent.setOptions({ });
    this.selectedItem = null;
    this.searchText = "";

    this.players = [];

    const self = this;
    Restangular.extendModel('players', (model)=> {
      model.image =  self.getIconFor(model.position);
      return model;
    });

    this.api.all('players').getList()
      .then((players)=> {
        this.players = players;
      });

    if($stateParams.id){
      Restangular.one('teams', $stateParams.id).get().then((entity)=> { this.team = entity; });
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

  getIconFor(position){
    return this.playerIcon[position];
  }
}
