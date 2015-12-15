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
    'Min Teams': 'Min Teams',
    'Max Teams': 'Max Teams',
    'Name': 'Name',
    'Open': 'Open',
    'Players': 'Players',
    'Save': 'Save',
    'Score': 'Score',
    'Scores': 'Scores',
    'Stage': 'Stage',
    'Stages': 'Stages',
    'Teams': 'Teams'
  })

  .translations('es', {
    'DEFENDER': 'DEFENSOR',
    'FORWARD': 'DELANTERO',
    'GOALKEEPER': 'ARQUERO',
    'MIDFIELDER': 'MEDIOCAMPISTA',
    'Leagues': 'Ligas',
    'Logout': 'Cerrar sesion',
    'Min Teams': 'Minimo de equipos',
    'Max Teams': 'Maximo de equipos',
    'Name': 'Nombre',
    'Open': 'Abrir',
    'Players': 'Jugadores',
    'Save': 'Guardar',
    'Score': 'Puntaje',
    'Scores': 'Puntajes',
    'Stage': 'Fecha',
    'Stages': 'Fechas',
    'Teams': 'Equipos'
  })

  .registerAvailableLanguageKeys(['en', 'es'], {
    'en_*': 'en',
    'es_*': 'es'
  })

  .determinePreferredLanguage();
}
