let validator = require('../middleware/validate');

const createUser = async(req, res, next) => {
    const validationRules = {
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|email',
        phone: 'required|digits:10',
        password: 'required|string|min:8|strict'
    }
    await validator(req.body, validationRules, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}

module.exports = {
    createUser
};