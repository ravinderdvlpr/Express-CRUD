const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate(value) {
            if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                throw new Error('Password must contain at least one letter and one number')
            }
        }
    },
    mobile: { type: String },
});

userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
    return user = await this.findOne({ email, _id: { $ne: excludeUserId } })
  }
const User = mongoose.model('User', userSchema)
module.exports = User