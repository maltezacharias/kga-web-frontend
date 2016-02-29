angular.module( 'kga.inscribe', [
  'ui.router',
  'ui.bootstrap',
  'kga.studygroups'
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
  vm.groups= studygroups.groups;
  vm.filter = '';

})

;
