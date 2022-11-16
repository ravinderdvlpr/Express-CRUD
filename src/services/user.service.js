const User = require('../models/user');
const createUser = async(req, res) => {
    console.log(req.body);
    return User.create(req.body);
    return {
        status: '200',
        data: '',
    }
}

module.exports = {
    createUser
}