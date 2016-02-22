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
        controller: 'AdminCtrl',
        templateUrl: 'admin/admin.tpl.html'
      }
    },
    data:{ pageTitle: 'Administration' }
  });
})

.controller( 'AdminCtrl', function AdminCtrl( $scope ) {
  $scope.newGroup = {
    number: '',
    name: '',
    capacity: 0
  };
})

;
