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

.controller( 'InscribeCtrl', function InscribeCtrl( ) {
  var vm = this;
  vm.kleingruppen= [];
  vm.filter = '';


  for (counter = 0; counter < 80; counter++) {
    vm.kleingruppen.push({
      number: '' + counter ,
      name: 'Kleingruppe ' + counter,
      remaining: 10,
      capacity: 10
    });
  }

  randomizeRemaining();

  function randomizeRemaining() {
    _.each(vm.kleingruppen, function (kleingruppe){
      kleingruppe.remaining = Math.floor(Math.random()*10);
    });
    setTimeout(randomizeRemaining, Math.floor(Math.random()*200));
  }

})

;
