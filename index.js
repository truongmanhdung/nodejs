require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csurf = require('csurf');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);


var userRoute = require('./routes/user.router');
var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');
var authRoute = require('./routes/auth.router');
var productRoute = require('./routes/product.router');
var cartRoute = require('./routes/cart.router'); 
var translateRoute = require('./routes/transfer.router');   
var port = 3000;
var app = express();
app.set('view engine', 'pug')
app.set('views', './views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
app.use(csurf({cookie:true}));
app.use(express.static('public'));
app.get('/', function(request, response){
    response.render('index',{
        name: 'AAA',
    });
});
app.use('/users',authMiddleware.requireAuth, userRoute);
app.use('/transfer',authMiddleware.requireAuth, translateRoute);
app.use('/products', productRoute);
app.use('/cart',cartRoute);
app.use('/auth', authRoute);

app.listen(port, function (){
    console.log('Server listening on port ' + port);
});