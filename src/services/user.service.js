const User = require('../models/user');
const bcrypt = require('bcryptjs');
let response = {
    status: 400,
    message: '',
    data: []
}
const createUser = async(req, res) => {
    const userExists = await User.isEmailTaken(req.body.email);
    if(userExists) {
        response.status = 401;
        response.message = "Email already exists"
        return response;
    }
    let encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        password: encryptedPassword,
    }
    const result = User.create(userData);
    response.status = 200;
    response.message = "User has been registered successfully"
    response.data = userData;
    return response;
}

module.exports = {
    createUser
}