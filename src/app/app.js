angular.module( 'kga', [
  'templates-app',
  'templates-common',
  'kga.home',
  'kga.sign-in',
  'kga.inscribe',
  'kga.admin',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $rootScope ) {

  $scope.signOut = function signOut(){
    $rootScope.loggedIn = false;
    delete($rootScope.user);
  };

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | kgaWeb' ;
    }
  });
})

;
