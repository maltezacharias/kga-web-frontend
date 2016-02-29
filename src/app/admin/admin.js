angular.module( 'kga.admin', [
  'ui.router',
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
    data:{
      pageTitle: 'Administration',
      roles: ['administrator']
    }
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
