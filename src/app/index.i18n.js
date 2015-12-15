export function i18nConfig ($translateProvider) {
  'ngInject';
  $translateProvider.translations('en', {
    'Leagues': 'Leagues',
    'Logout': 'Logout',
    'Name': 'Name',
    'Open': 'Open',
    'Players': 'Players',
    'Teams': 'Teams'
  });

  $translateProvider.translations('es', {
    'Leagues': 'Ligas',
    'Logout': 'Cerrar sesion',
    'Name': 'Nombre',
    'Open': 'Abrir',
    'Players': 'Jugadores',
    'Teams': 'Equipos'
  });

  $translateProvider.preferredLanguage('en');
}
