export function i18nConfig ($translateProvider) {
  'ngInject';
  $translateProvider

  .translations('en', {
    'DEFENDER': 'DEFENDER',
    'FORWARD': 'FORWARD',
    'GOALKEEPER': 'GOALKEEPER',
    'MIDFIELDER': 'MIDFIELDER',
    'Leagues': 'Leagues',
    'Logout': 'Logout',
    'Name': 'Name',
    'Open': 'Open',
    'Players': 'Players',
    'Save': 'Save',
    'Score': 'Score',
    'Scores': 'Scores',
    'Teams': 'Teams'
  })

  .translations('es', {
    'DEFENDER': 'DEFENSOR',
    'FORWARD': 'DELANTERO',
    'GOALKEEPER': 'ARQUERO',
    'MIDFIELDER': 'MEDIOCAMPISTA',
    'Leagues': 'Ligas',
    'Logout': 'Cerrar sesion',
    'Name': 'Nombre',
    'Open': 'Abrir',
    'Players': 'Jugadores',
    'Save': 'Guardar',
    'Score': 'Puntaje',
    'Scores': 'Puntajes',
    'Teams': 'Equipos'
  })

  .registerAvailableLanguageKeys(['en', 'es'], {
    'en_*': 'en',
    'es_*': 'es'
  })

  .determinePreferredLanguage();
}
