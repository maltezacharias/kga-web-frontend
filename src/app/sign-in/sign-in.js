angular.module( 'kga.sign-in', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'kga.user'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'sign-in', {
    url: '/sign-in',
    views: {
      "main": {
        controller: 'SignInCtrl as signIn',
        templateUrl: 'sign-in/sign-in.tpl.html'
      }
    },
    data:{
      pageTitle: 'Einloggen',
      anonymousAccess: true
    }
  });
})

.controller( 'SignInCtrl', function SignInCtrl( $state, $rootScope, user ) {
  var vm = this;
  vm.studentId = $rootScope.user ? $rootScope.user.studentId : '';
  vm.password = '';
  vm.signIn = signIn;

  function signIn() {
    user.login(vm.studentId, vm.password).then(loginComplete);
  }

  function loginComplete() {
    $state.go('home');
  }
})

;
