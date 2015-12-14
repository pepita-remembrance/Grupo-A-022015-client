export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })

    .state('players', {
      url: '/players',
      templateUrl: 'app/players/players.html',
      controller: 'PlayersController',
      controllerAs: 'playersCtrl'
    })

  ;

  $urlRouterProvider.otherwise('/');
}
