angular.module( 'kga', [
  'templates-app',
  'templates-common',
  'kga.home',
  'kga.sign-in',
  'kga.inscribe',
  'kga.admin',
  'ui.router'
])

.config( function myAppConfig ( $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $rootScope, $state) {

  var alwaysAllowedStates = ['home','sign-in'];

  $scope.signOut = function signOut(){
    $rootScope.loggedIn = false;
    delete($rootScope.user);
    $state.go('home');
  };

  $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
    // Check if no user is logged in and the state is not in the exception list
    if (($rootScope.loggedIn !== true) && !toState.data.anonymousAccess ) {
      // Prevent state change if state is not allowed
      event.preventDefault();
      $state.go('home');
    }
  });

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | kgaWeb' ;
    }
  });

})

;
