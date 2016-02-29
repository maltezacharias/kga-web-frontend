(function() {

  angular.module('kga.user', [])
  .factory('user', userFactory);


  function userFactory($q, $http, $state) {
    var userService = {
      authToken: undefined,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      hasRole: hasRole,
      getId: getId,
      id: undefined,
      roles: []
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
          if(response.data && response.data.success && response.data.token) {
            userService.authToken = response.data.token;
            var decodedToken = jwt_decode(userService.authToken);
            userService.id = decodedToken.sub ? decodedToken.sub : username;
            userService.roles = decodedToken.roles ? decodedToken.roles : [];
            loginDeferred.resolve();
          } else {
            var errorMessage = 'Generischer Fehler bei der Anmeldung';
            if(response.data && response.data.message) {
              errorMessage = response.data.message;
            } 
            loginDeferred.reject(errorMessage);
          }
        }

        function errorCallback(response) {
          loginDeferred.reject(response.data);
        }
        return loginDeferred.promise;
    }

    function logout(){
        userService.authToken = undefined;
        userService.roles = [];
        userService.id = undefined;
        $state.go('home');
    }

    function isLoggedIn(){
      return userService.getId() !== undefined;
    }

    function hasRole(role){
      return userService.roles.indexOf(role) !== -1;
    }

    function getId() {
      return userService.id;
    }



  }

})();
