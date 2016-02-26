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
        controller: 'InscribeCtrl as inscribe',
        templateUrl: 'inscribe/inscribe.tpl.html'
      }
    },
    data:{ pageTitle: 'In Kleingruppe anmelden' }
  });
})

.controller( 'InscribeCtrl', function InscribeCtrl( studygroups ) {
  var vm = this;
  vm.kleingruppen= studygroups.groups;
  vm.filter = '';

})

;
