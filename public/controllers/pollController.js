angular.module('app')
  .controller('pollController',
  [ '$scope', '$location', '$route', 'pollFactory', 'authService', 'userService', '$routeParams', '$window',
  function($scope, $location, $route, pollFactory, authService, userService, $routeParams, $window){
    $scope.isAuthed = authService.isAuthed();

    console.log("route: ", $routeParams);
    $scope.param = $routeParams

    $scope.getPolls = function(){
      pollFactory.getPolls(function(polls){
        $scope.polls = polls;
      });
    };
    $scope.getPolls();

    $scope.vote1 = function(poll){
      poll.count1 += 1;
      console.log("yyoooo", poll)
      pollFactory.vote1(poll, function(errorsArray, poll){
        if (errorsArray){
          return displayErrors(errorsArray);
        }
        $window.location.reload();
      });
    };

    $scope.vote2 = function(poll){
      poll.count2 += 1;
      console.log("yyoooo", poll)
      pollFactory.vote2(poll, function(errorsArray, poll){
        if (errorsArray){
          return displayErrors(errorsArray);
        }
        $window.location.reload();
      });
    };

    $scope.vote3 = function(poll){
      poll.count3 += 1;
      console.log("yyoooo", poll)
      pollFactory.vote3(poll, function(errorsArray, poll){
        if (errorsArray){
          return displayErrors(errorsArray);
        }
        $window.location.reload();
      });
    };

    $scope.vote4 = function(poll){
      poll.count4 += 1;
      console.log("yyoooo", poll)
      pollFactory.vote4(poll, function(errorsArray, poll){
        if (errorsArray){
          return displayErrors(errorsArray);
        }
        $window.location.reload();
      });
    };

    $scope.newPoll = function(newPoll){
      if( newPoll === undefined ){
        console.log("in here!");
      pollFactory.newPoll(newPoll, function(errorsArray, poll){
        if (errorsArray){
          return displayErrors(errorsArray);
        }
        $location.path('/main');
      });
    }
    else {
      console.log("in there!");
      newPoll.user = $scope.currentUser;
      newPoll.count1 = 0;
      newPoll.count2 = 0;
      newPoll.count3 = 0;
      newPoll.count4 = 0;
      pollFactory.newPoll(newPoll, function(errorsArray, poll){
        if (errorsArray){
          return displayErrors(errorsArray);
        }
        $location.path('/main');
      });
    }
    };

    $scope.deletePoll = function(poll){
      console.log(poll);
      pollFactory.deletePoll(poll, function(){
        $scope.getPolls();
      });
    };

    $scope.currentUser = function(){
      userService.currentUser(function(currentUser){
        $scope.currentUser = currentUser
      })
    };
    $scope.currentUser();

    $scope.viewPoll = function(id){
      console.log("route", id)
      pollFactory.viewPoll(id, function(errorsArray, poll){
        if (errorsArray){
          return displayErrors(errorsArray);
        }
        $scope.poll = poll;
        console.log("HERE", $scope.poll)
      });
    };

    function displayErrors(errorArrayOrString){
      $scope.errors = Array.isArray(errorArrayOrString) ? errorArrayOrString : [errorArrayOrString];
    };

  }]);
