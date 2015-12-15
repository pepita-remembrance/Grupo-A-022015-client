export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })

    .state('container', {
      templateUrl: 'app/container/container.html',
      controller: 'ContainerController',
      controllerAs: 'containerCtrl'
    })

    .state('players', {
      url: '/players',
      parent:'container',
      templateUrl: 'app/players/players.html',
      controller: 'PlayersController',
      controllerAs: 'playersCtrl'
    })

    .state('teams', {
      url: '/teams',
      parent:'container',
      templateUrl: 'app/teams/teams.html',
      controller: 'TeamsController',
      controllerAs: 'teamsCtrl'
    })

    .state('team', {
      url: '/teams/:id',
      parent:'container',
      templateUrl: 'app/team/team.html',
      controller: 'TeamController',
      controllerAs: 'teamCtrl'
    })

    .state('leagues', {
      url: '/leagues',
      parent:'container',
      templateUrl: 'app/leagues/leagues.html',
      controller: 'LeaguesController',
      controllerAs: 'leaguesCtrl'
    })

  ;

  $urlRouterProvider.otherwise('/');
}
