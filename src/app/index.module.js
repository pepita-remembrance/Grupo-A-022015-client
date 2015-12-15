/* global malarkey:false, moment:false */

import { config       } from './index.config';
import { routerConfig } from './index.route';
import { runBlock     } from './index.run';

import { MainController      } from './main/main.controller';
import { PlayersController   } from './players/players.controller';
import { ContainerController } from './container/container.controller';
import { TeamsController     } from './teams/teams.controller';
import { LeaguesController   } from './leagues/leagues.controller';
import { TeamController      } from './team/team.controller';

import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService         } from '../app/components/webDevTec/webDevTec.service';

import { NavbarDirective   } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { DrawerDirective   } from '../app/components/drawer/drawer.directive';

angular.module('grupoA022015Client', ['ngAnimate','ngMdIcons', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ngMaterial', 'toastr', 'restangular'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)

  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)

  .controller('MainController', MainController)
  .controller('PlayersController', PlayersController)
  .controller('ContainerController', ContainerController)
  .controller('TeamsController', TeamsController)
  .controller('LeaguesController', LeaguesController)
  .controller('TeamController', TeamController)

  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('drawerItems', DrawerDirective);
