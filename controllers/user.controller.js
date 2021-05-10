var db = require('../db');
var shortid = require('shortid');
var md5 = require('md5');
module.exports.index = function(request,response){
    response.render('users/index',{
        users: db.get('users').value()
    });
};
module.exports.search = function(request,response){
    var q = request.query.q;
    var matchedUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    response.render('users/index',{
        users: matchedUsers
    });
};
module.exports.create = function(request,response){
    response.render('users/create');
};
module.exports.createget = function(request,response){
    var id = request.params.id;
    var user = db.get('users').find({id: id}).value();
    response.render('users/view',{
        user: user
    });
};
module.exports.createpost = function(request,response){
    request.body.id = shortid.generate();
    request.body.avatar = request.file.path.split("\\").splice(1).join('\\');
    request.body.password = md5(request.body.password);
    db.get('users').push(request.body).write();
    response.redirect('/users');
};
