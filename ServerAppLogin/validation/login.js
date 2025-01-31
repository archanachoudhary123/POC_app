const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data){
    let errors = {};
    
    data.username= !isEmpty(data.username) ? data.username : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if (validator.isEmpty(data.username)){
        errors.username = 'UserName field is required';
    }

    if (validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };
}

