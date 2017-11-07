const authController = require( '../controllers/auth.js' )

module.exports = function(app) {
  app.post('/auth/login', authController.login)
    .post('/auth/register', authController.register)
    .post('/auth/newPoll', authController.newPoll)
    .get('/auth/getPolls', authController.getPolls)
    .post('/auth/deletePoll', authController.deletePoll)
    .post('/auth/viewPoll', authController.viewPoll)
    .post('/auth/vote1', authController.vote1)
    .post('/auth/vote2', authController.vote2)
    .post('/auth/vote3', authController.vote3)
    .post('/auth/vote4', authController.vote4)
    .get('/auth/currentUser', authController.currentUser)
    .delete('/auth/logout', authController.logout);
};
