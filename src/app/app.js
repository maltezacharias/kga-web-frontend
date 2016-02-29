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
  vm.showAdminTab = function(){ return user.hasRole('administrator'); };
  var alwaysAllowedStates = ['home','sign-in'];

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
    // Check if roles are defined on the view
    if (toState.data.roles && ( user.isLoggedIn() === false || _.intersection(toState.data.roles,user.roles).length === 0 ) ) {
      // Prevent state change
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
