var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;
var users= [
    { id: 1, name: 'dũng'},
    { id: 2, name: 'hoàng'},
    { id: 3, name: 'manh'},
    { id: 4, name: 'anh'},
    { id: 5, name: 'huy'},
    { id: 6, name: 'quốc'},
    { id: 7, name: 'linh'},
    { id: 8, name: 'nam'},
];
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
        users: users
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
    response.render('users/create',{
    });
    app.post('/users/create',function(request,response){
        users.push(request.body);
        response.redirect("./")
    })
})

app.listen(port, function (){
    console.log('Server listening on port ' + port);
});