export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/container/container.html',
      controller: 'ContainerController',
      controllerAs: 'containerCtrl',
      data: {
        requiresLogin: true
      }
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
      controllerAs: 'playersCtrl',
      data: {
        requiresLogin: true
      }
    })

    .state('teams', {
      url: '/teams',
      parent:'container',
      templateUrl: 'app/teams/teams.html',
      controller: 'TeamsController',
      controllerAs: 'teamsCtrl',
      data: {
        requiresLogin: true
      }
    })

    .state('team', {
      url: '/teams/{id:int}',
      parent:'container',
      templateUrl: 'app/team/team.html',
      controller: 'TeamController',
      controllerAs: 'teamCtrl',
      data: {
        requiresLogin: true
      }
    })

    .state('newTeam', {
      url: '/teams/new',
      parent:'container',
      templateUrl: 'app/team/team.html',
      controller: 'TeamController',
      controllerAs: 'teamCtrl',
      data: {
        requiresLogin: true
      }
    })

    .state('leagues', {
      url: '/leagues',
      parent:'container',
      templateUrl: 'app/leagues/leagues.html',
      controller: 'LeaguesController',
      controllerAs: 'leaguesCtrl',
      data: {
        requiresLogin: true
      }
    })

    .state('league', {
      url: '/leagues/{id:int}',
      parent:'container',
      templateUrl: 'app/league/league.html',
      controller: 'LeagueController',
      controllerAs: 'leagueCtrl',
      data: {
        requiresLogin: true
      }
    })

    .state('newLeague', {
      url: '/leagues/new',
      parent:'container',
      templateUrl: 'app/league/league.html',
      controller: 'LeagueController',
      controllerAs: 'leagueCtrl',
      data: {
        requiresLogin: true
      }
    })

    .state('login', {
      url: '/login',
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    })

  ;

  $urlRouterProvider.otherwise('/');
}
