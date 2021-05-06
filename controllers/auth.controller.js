var md5 = require('md5');
var db = require('../db');
module.exports.login = function(request,response){
    response.render('auth/login',{
        users: db.get('users').value()
    });
};
module.exports.postlogin = function(request,response){
    var email = request.body.email;
    var password = request.body.password;
    var user = db.get('users').find({email: email}).value();

    if(!user){
        response.render('auth/login',{
            errors: [
                'User dose not exist'
            ],
            values: request.body
        });
            return;
    }
    var hardPassword = md5(password);
    if(user.password!==hardPassword){
        response.render('auth/login', {
            errors: [
                'Wrong password.'
            ],
            values: request.body
        });
        return;
    }
    response.cookie('userId', user.id);
    response.redirect('/users');
};