import { CoreController }    from '../core/core.controller';

export class TeamController extends CoreController {
  constructor (Restangular, $scope, $stateParams) { 'ngInject';
    super(Restangular, $scope);

    this.playerIcon = {
      "GOALKEEPER":"assets/svg/ic_gradient_white_18px.svg",
      "DEFENDER":"assets/svg/ic_security_white_18px.svg",
      "MIDFIELDER":"assets/svg/ic_compare_arrows_white_18px.svg",
      "FORWARD":"assets/svg/ic_forward_white_18px.svg"
    };

    this.parent.setOptions({ });
    this.selectedItem = null;
    this.searchText = "";

    this.players = [];

    const self = this;
    Restangular.extendModel('players', (model)=> {
      //model.image =  self.getIconFor(model.position);
      return model;
    });

    this.api.all('players').getList()
      .then((players)=> {
        players.forEach((e)=>{
          e.image = self.getIconFor(e.position);
          this.players.push(e);
        });
      });

    Restangular.one('teams', $stateParams.id).get()
      .then((entity)=> { this.team = entity; });

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
