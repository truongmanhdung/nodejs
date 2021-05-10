var db = require('../db');
var shortid = require('shortid');
var md5 = require('md5');   
module.exports.product = function(request,response){
    
    // var drop = (page - 1) * perPage;
    function pageClick(page){
        var page = parseInt(request.query.page) || 1; //nếu ko có gán gt page = 1
        var perPage = 8;
        var prevPage = page - 1;
        var nextPage = page + 1;
        var start = (page - 1) * perPage;
        var end = page * perPage;
        response.render('products/product',{
            // cách 1
            products: db.get('products').value().slice(start, end)
    
            //cách 2
            //products: db.get('products').drop(drop).take(perPage).value()
        });
    }
    
}