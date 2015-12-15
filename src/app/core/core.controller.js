export class CoreController {
  constructor ( Restangular, $scope) {
    'ngInject';
    this.api = Restangular;
    this.parent = $scope;
  }
}
