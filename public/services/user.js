angular.module('app')
  .service('userService', ['$http', function($http){

    this.login = function(user, callBackToController){
      console.log("Inside cliente side userService.login function");
      return $http.post('/auth/login', user)
      .then(function(response){
        console.log("CHECING PATH 1: ", response);
        callBackToController(response)
      })
      .catch(function(errorResponse){
        console.log('inside service-login-.catch', errorResponse.data)
        callBackToController(errorResponse.data)
      })
    };

    this.register = function(user){
      return $http.post('/auth/register', user);
    };

    this.currentUser = function(callBackToController){
      console.log("#2 - inside currentUser function - userService");
      $http.get('/auth/currentUser')
        .then(function(response){
          this.currentUser = response.data;
          callBackToController(this.currentUser)
        })
        .catch(function(errorResponse){
          console.log(errorResponse);

          callBackToController(errorResponse.data);
        });
    };

  }]);
