require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var userRoute = require('./routes/user.router');

var authMiddleware = require('./middlewares/auth.middleware');
var authRoute = require('./routes/auth.router');
var productRoute = require('./routes/product.router')
var port = 3000;
var app = express();
app.set('view engine', 'pug')
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.static('public'));
app.use('/users',authMiddleware.requireAuth, userRoute);
app.use('/products', productRoute);
app.use('/auth', authRoute);
app.get('/', function(request, response){
    response.render('index',{
        name: 'AAA',
    });
});

app.listen(port, function (){
    console.log('Server listening on port ' + port);
});