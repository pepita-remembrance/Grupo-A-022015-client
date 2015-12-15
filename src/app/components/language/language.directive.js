export function LanguageDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/language/language.html',
    scope: {
    },
    controller: LanguageController,
    controllerAs: 'languageCtrl',
    bindToController: true
  };

  return directive;
}

class LanguageController {
  constructor ($state, auth, store) {
    'ngInject';

    this.entries = [
      {
        label:'Espaol',
        code:'ES'
      },{
        label:'English',
        code:'EN'
      }
    ]
  }

}
