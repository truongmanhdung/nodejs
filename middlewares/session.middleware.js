var shortid = require('shortid');
var db = require('../db');
module.exports = function(request,response,next){
    if(!request.signedCookies.sessionID){
        var sessionID = shortid.generate();
        response.cookie('sessionID',sessionID, {
            signed: true
        });
        db.get('sessions').push({
            id: sessionID
        }).write();
    }
    next();
}