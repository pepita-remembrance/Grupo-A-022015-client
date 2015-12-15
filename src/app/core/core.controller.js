export class CoreController {
  constructor ( Restangular, $scope) {
    'ngInject';
    this.api = Restangular;
    this.parent = $scope;


    this.playerIcon = {
      "GOALKEEPER":"assets/svg/ic_gradient_white_18px.svg",
      "DEFENDER":"assets/svg/ic_security_white_18px.svg",
      "MIDFIELDER":"assets/svg/ic_compare_arrows_white_18px.svg",
      "FORWARD":"assets/svg/ic_forward_white_18px.svg"
    };

  }

  fetchEntities(entityName){
    this[entityName] = [];
    this.api.all(entityName).getList()
      .then((entities)=> {
        this[entityName] = entities;
      });
  }

  fetch(type,id, withName=type){
    this[withName] = {};
    this.api.one(type, id).get()
      .then((entity)=> {
        this[withName] = entity;
      });
  }
}
