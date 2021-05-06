var db = require('../db');

module.exports.requireAuth = function (request, response , next) {
    if(!request.signedCookies.userId){
        response.redirect('/auth/login');
    }
    var user = db.get('users').find({
        id: request.signedCookies.userId
    }).value();
    if(!user){
        response.redirect('/auth/login');
        return;
    }
    response.locals.user = user;
    next();
}