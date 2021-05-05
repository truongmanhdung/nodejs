module.exports.createpost = function(request, response, next) {
    var errors = [];
    if(!request.body.name){
        errors.push('name is required.');
    }
    if(!request.body.phone){
        errors.push('phone is required.');
    }
    if(errors.length){
        response.render('users/create',{
            errors: errors,
            values: request.body
        });
        return;
    }
    next();
}
