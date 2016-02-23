angular.module( 'kga.sign-in', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'sign-in', {
    url: '/sign-in',
    views: {
      "main": {
        controller: 'SignInCtrl',
        templateUrl: 'sign-in/sign-in.tpl.html'
      }
    },
    data:{ 
      pageTitle: 'Einloggen',
      anonymousAccess: true
    }
  });
})

.controller( 'SignInCtrl', function SignInCtrl( $scope, $location, $rootScope ) {
  $scope.signIn = function signIn() {
    $rootScope.loggedIn = true;
    $rootScope.admin = true;
    $rootScope.user = { studentId: 'n1542402' };
    $location.path('/home');
  };
})

;
