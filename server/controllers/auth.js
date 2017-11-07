const User = require('mongoose').model('User');
const Poll = require('mongoose').model('Poll');


module.exports = {
  login(request, response) {
    console.log('inside serverside controller - auth.js');
    User.findOne({ name: request.body.name })
    .then(function(user){
      if (!user) throw new Error('no credentials match');
      console.log("user: ", user)
      login(request, response, user)
    })
    .catch(errorHandler.bind(response));
  },
  register(request, response) {
      User.create(request.body)
        .then(function(user){
          login(request, response, user)
        })
        .catch(errorHandler.bind(response));
  },
  newPoll(request,response) {
    Poll.create(request.body)
      .then(function(poll){
        response.json(poll)
      })
      .catch(errorHandler.bind(response));
  },
  deletePoll(request,response) {
    console.log("yo", request.body.question);
    Poll.remove({ question:  request.body.question })
      .then(function(){
        console.log("appointment deleted");
        response.json("Appointment Deleted")
      })
      .catch(errorHandler.bind(response));
  },
  logout(request, response) {
    console.log('serverside - auth.js logout');
    request.session.destroy();
    response.clearCookie('userID');
    response.clearCookie('expiration');
    response.json(true);
  },
  getPolls(request, response){
    Poll.find({}, function(error,polls){
      if(error){
        return console.log("error: ",error)
      }
      response.json(polls);
    })
  },
  currentUser(request, response){
    response.json(request.session.user.name);
  },
  viewPoll(request, response){
    console.log("HOLLA", request.body.id);
    Poll.find({_id: request.body.id}, function(error,poll){
      if(error){
        return console.log("error: ",error)
      }
      console.log(poll)
      response.json(poll);
    })
  },
  vote1(request,response){
    Poll.update({question: request.body.question}, {count1: request.body.count1})
    .then(function(){
      response.json("updated")
    })
    .catch(errorHandler.bind(response));
  },
  vote2(request,response){
    Poll.update({question: request.body.question}, {count2: request.body.count2})
    .then(function(){
      response.json("updated")
    })
    .catch(errorHandler.bind(response));
  },
  vote3(request,response){
    Poll.update({question: request.body.question}, {count3: request.body.count3})
    .then(function(){
      response.json("updated")
    })
    .catch(errorHandler.bind(response));
  },
  vote4(request,response){
    Poll.update({question: request.body.question}, {count4: request.body.count4})
    .then(function(){
      response.json("updated")
    })
    .catch(errorHandler.bind(response));
  },
};

function login(request, response, user){
  console.log("request.session.user: ", request.session.user);
  request.session.user = user.toObject();
  console.log("request.session.user(update): ", request.session.user);
  delete request.session.user.password;

  response.cookie('userID', user._id);
  response.cookie('expiration', Date.now() * 86400 * 1000);

  response.json(true);
}

function errorHandler(error){
  let errors = [];

  if (error.errors){
    errors = Object.keys(error.errors).map(key => error.errors[key].message);
  }
  else if(typeof error === 'string'){
    errors.push(error)
  }
  else{
    errors.push(error.message);
  }

  console.log(errors);

  this.status(422).json(errors);
}
