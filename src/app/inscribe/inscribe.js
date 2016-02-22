angular.module( 'kga.inscribe', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'inscribe', {
    url: '/inscribe',
    views: {
      "main": {
        controller: 'InscribeCtrl',
        templateUrl: 'inscribe/inscribe.tpl.html'
      }
    },
    data:{ pageTitle: 'In Kleingruppe anmelden' }
  });
})

.controller( 'InscribeCtrl', function InscribeCtrl( $scope ) {
  $scope.kleingruppen = [];
  for (counter = 0; counter < 80; counter++) {
    $scope.kleingruppen.push({
      number: '' + counter ,
      name: 'Kleingruppe ' + counter,
      remaining: Math.floor(Math.random()*10),
      capacity: 10
    });
  }
})

;
