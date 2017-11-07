angular.module('app')
  .factory('pollFactory', ['$http', function($http){
    const factory = {}
    factory.poll = [];
    factory.polls = [];
    factory.poll1 = [];

    factory.newPoll = function(newPoll, callBackToController){
      $http.post('/auth/newPoll', newPoll)
      .then(function(res){
        console.log("Got poll.");
        factory.poll.push(res.data);
        callBackToController(null, res.data)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.vote1 = function(poll, callBackToController){
      $http.post('/auth/vote1', poll)
      .then(function(res){
        callBackToController(null, res.data)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.vote2 = function(poll, callBackToController){
      $http.post('/auth/vote2', poll)
      .then(function(res){
        callBackToController(null, res.data)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.vote3 = function(poll, callBackToController){
      $http.post('/auth/vote3', poll)
      .then(function(res){
        callBackToController(null, res.data)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.vote4 = function(poll, callBackToController){
      $http.post('/auth/vote4', poll)
      .then(function(res){
        callBackToController(null, res.data)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.viewPoll = function(id, callbackToController){
      console.log("YOOO", id)
      $http.post('/auth/viewPoll', id)
      .then(function(res){
        factory.poll1 = res.data;
        callbackToController(null, factory.poll1)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callbackToController(errorResponse.data);
      });
    };

    factory.deletePoll = function(poll, callBackToController){
      $http.post('/auth/deletePoll', poll)
      .then(function(){
        callBackToController()
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callBackToController(errorResponse.data);
      });
    };

    factory.getPolls = function(callbackToController){
      $http.get('/auth/getPolls')
      .then(function(res){
        factory.polls = res.data;
        console.log("factory, getPolls: ", factory.polls);
        callbackToController(factory.polls)
      })
      .catch(function(errorResponse){
        console.log(errorResponse);

        callbackToController(errorResponse.data);
      });
    };

    return factory
  }])
