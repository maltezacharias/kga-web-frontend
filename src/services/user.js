(function() {

  angular.module('kga.user', [])
  .factory('user', userFactory);


  function userFactory($q, $http) {
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
        var getTokenPromise = $http.get('/getToken',{
          params: {
            username: username,
            password: password
          }
        }).then(successCallback, errorCallback);

        function successCallback(response) {
          userService.authToken = response.data;
          userService.id = username;
          loginDeferred.resolve();
        }

        function errorCallback(response) {
          loginDeferred.reject(response.statusText);
        }
        return loginDeferred.promise;
    }

    function logout(){
        userService.authToken = undefined;
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
