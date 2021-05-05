var db = require('../db');

module.exports.requireAuth = function (request, response , next) {
    if(!request.cookies.userId){
        response.redirect('/auth/login');
    }
    var user = db.get('users').find({id: request.cookies.userId}).value();
    if(!user){
        response.redirect('/auth/login');
        return;
    }
    next();
}