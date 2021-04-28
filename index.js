var express = require('express');
var app = express();

var port = 3000;
app.get('/user', function(request, response){
    response.send("Đây là trang user");
});
app.listen(port, function (){
    console.log('Server listening on port ' + port);
});