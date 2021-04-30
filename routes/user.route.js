var express = require('express');
var db = require('../db');
var shortid = require('shortid');

var router = express.Router();
router.get('/',function(request,response){
    response.render('users/index',{
        users: db.get('users').value()
    });
});

router.get('/search',function(request,response){
    var q = request.query.q;
    var matchedUsers = users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    response.render('users/index',{
        users: matchedUsers
    });
});

router.get('/create',function(request,response){
    response.render('users/create');
});
router.get('/:id',function(request,response){
    var id = request.params.id;
    var user = db.get('users').find({id: id}).value();
    response.render('users/view',{
        user: user
    });
});

router.post('/create',function(request,response){
    request.body.id = shortid.generate();
    db.get('/view/users').push(request.body).write();
    response.redirect('/users');
});
module.exports = router;