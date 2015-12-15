export class CoreController {
  constructor ( Restangular, $scope) {
    'ngInject';
    this.api = Restangular;
    this.parent = $scope;
  }

  fetchEntities(entityName){
    this[entityName] = [];
    this.api.all(entityName).getList()
      .then((entities)=> {
        this[entityName] = entities;
      });
  }
}