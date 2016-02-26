angular.module( 'kga.admin', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'admin', {
    url: '/admin',
    views: {
      "main": {
        controller: 'AdminCtrl as admin',
        templateUrl: 'admin/admin.tpl.html'
      }
    },
    data:{ pageTitle: 'Administration' }
  });
})

.controller( 'AdminCtrl', function AdminCtrl( ) {
  var vm = this;
  vm.newGroup = {
    number: '',
    name: '',
    capacity: 0
  };
})

;
