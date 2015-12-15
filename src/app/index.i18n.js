export function i18nConfig ($translateProvider) {
  'ngInject';
  $translateProvider

  .translations('en', {
    'Leagues': 'Leagues',
    'Logout': 'Logout',
    'Name': 'Name',
    'Open': 'Open',
    'Players': 'Players',
    'Teams': 'Teams'
  })

  .translations('es', {
    'Leagues': 'Ligas',
    'Logout': 'Cerrar sesion',
    'Name': 'Nombre',
    'Open': 'Abrir',
    'Players': 'Jugadores',
    'Teams': 'Equipos'
  })

  .registerAvailableLanguageKeys(['en', 'es'], {
    'en_*': 'en',
    'es_*': 'es'
  })

  .determinePreferredLanguage();
}
