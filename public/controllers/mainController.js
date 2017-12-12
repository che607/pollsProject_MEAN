angular.module('app')
  .controller('mainController',
    ['$scope', '$location', 'userService', 'authService',
      function($scope, $location, userService, authService){

        if (authService.isAuthed()){
          return $location.path('/main');
        };

        $scope.login = function(){
          console.log('Inside client side userService.login function');
          userService.login($scope.user, function(errorResponse){
            console.log("in here 1", errorResponse[0]);
            if (errorResponse[0] === "This name has not been registered."){
              console.log("inside IF")
              return displayErrors(errorResponse);
            }
            else{
              console.log("INSIDE ELSE")
              $location.path('/main');
            }
          });
        };

        $scope.register = function(callback){
          userService.register($scope.user)
            .then(function(){
              $location.path('/main');
            })
            .catch(function(errorResponse){
              console.log(errorResponse);
              callback(errorResponse.data.errors);
            });
        };

        function displayErrors(errorArrayOrString){
          // console.log("inside displayErrors function");
          $scope.errors = Array.isArray(errorArrayOrString) ? errorArrayOrString : [errorArrayOrString];
        };

      }
    ]
  );
