angular.module( 'kga', [
  'templates-app',
  'templates-common',
  'kga.home',
  'kga.sign-in',
  'kga.inscribe',
  'kga.admin',
  'ui.router',
  'kga.user'
])

.config( function myAppConfig ( $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $rootScope, $state, user) {
  var vm = this;
  vm.user = user;
  vm.signOut = signOut;
  var alwaysAllowedStates = ['home','sign-in'];

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
    // Check if no user is logged in and the state is not in the exception list
    if ((user.isLoggedIn() !== true) && !toState.data.anonymousAccess ) {
      // Prevent state change if state is not allowed
      event.preventDefault();
      $state.go('home');
    }
  });

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      vm.pageTitle = toState.data.pageTitle + ' | kgaWeb' ;
    }
  });

  function signOut(){
    user.logout();
  }

})

;
