var db = require('../db');
module.exports.addToCart = function(request,response,next){
    var productId = request.params.productId;
    var sessionID = request.signedCookies.sessionID;
    if(!sessionID){
        response.redirect('/products');
        return;
    };
    var count = db.get('sessions')
    .find({id: sessionID})
    .get('cart.'+productId,0)
    .value();
    db.get('sessions',)
    .find({id: sessionID})
    .set('cart.'+ productId, count +1)
    .write();
    response.redirect('/products');
}