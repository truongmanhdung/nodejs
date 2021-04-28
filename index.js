var express = require('express');
var app = express();

var port = 3000;
app.set('view engine', 'pug')
app.set('views', './views')
app.get('/', function(request, response){
    response.render('index',{
        name: 'AAA',
    });
});

app.get('/users',function(request,response){
    response.render('users/index',{
        users: [
            { id: 1, name: 'dũng'},
            { id: 2, name: 'hoàng'}
        ]
    });
})

app.listen(port, function (){
    console.log('Server listening on port ' + port);
});