/* global malarkey:false, moment:false */

import { config       } from './index.config';
import { routerConfig } from './index.route';
import { authConfig   } from './index.auth';
import { i18nConfig   } from './index.i18n';
import { runBlock     } from './index.run';

import { MainController      } from './main/main.controller';
import { PlayersController   } from './players/players.controller';
import { ContainerController } from './container/container.controller';
import { TeamsController     } from './teams/teams.controller';
import { LeaguesController   } from './leagues/leagues.controller';
import { TeamController      } from './team/team.controller';
import { LeagueController    } from './league/league.controller';
import { LoginController     } from './auth/login.controller';

import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService         } from '../app/components/webDevTec/webDevTec.service';

import { NavbarDirective   } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { DrawerDirective   } from '../app/components/drawer/drawer.directive';
import { onReadFile        } from '../app/components/onReadFile/onReadFile.directive';

angular.module('grupoA022015Client',
  ['ngAnimate','ngMdIcons', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngAria',
    'restangular', 'ui.router', 'ngMaterial', 'toastr', 'restangular', 'auth0',
    'angular-storage', 'angular-jwt', 'pascalprecht.translate'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(authConfig)
  .config(routerConfig)
  .config(i18nConfig)
  .run(runBlock)

  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)

  .controller('MainController', MainController)
  .controller('PlayersController', PlayersController)
  .controller('ContainerController', ContainerController)
  .controller('TeamsController', TeamsController)
  .controller('LeaguesController', LeaguesController)
  .controller('LeagueController', LeagueController)
  .controller('TeamController', TeamController)
  .controller('LoginController', LoginController)

  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('drawerItems', DrawerDirective)
  .directive('onReadFile', onReadFile);
