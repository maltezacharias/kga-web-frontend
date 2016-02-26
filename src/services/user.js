(function() {

  angular.module('kga.user', [])
  .factory('user', userFactory);


  function userFactory($q) {
    var userService = {
      authToken: undefined,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      getId: getId,
      id: undefined,
      roles: ['anonymousAccess']
    };

    return userService;

    function login(username, password){
        var loginDeferred = $q.defer();
        userService.id = username;
        loginDeferred.resolve();
        return loginDeferred.promise;
    }

    function logout(){
        userService.id = undefined;
    }

    function isLoggedIn(){
      return userService.getId() !== undefined;
    }

    function getId() {
      return userService.id;
    }



  }

})();
