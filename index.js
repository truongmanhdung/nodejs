var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var low = require('lowdb');
var shortid = require('shortid')
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
db = low(adapter);
db.defaults({users: []}).write();
var port = 3000;

app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function(request, response){
    response.render('index',{
        name: 'AAA',
    });
});

app.get('/users',function(request,response){
    response.render('users/index',{
        users: db.get('users').value()
    });
});

app.get('/users/search',function(request,response){
    var q = request.query.q;
    var matchedUsers = users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    response.render('users/index',{
        users: matchedUsers
    });
});

app.get('/users/create',function(request,response){
    response.render('users/create');
});
app.get('/users/:id',function(request,response){
    var id = request.params.id;
    var user = db.get('users').find({id: id}).value();
    response.render('users/view',{
        user: user
    });
});

app.post('/users/create',function(request,response){
    request.body.id = shortid.generate();
    db.get('users').push(request.body).write();
    response.redirect('/users');
});


app.listen(port, function (){
    console.log('Server listening on port ' + port);
});