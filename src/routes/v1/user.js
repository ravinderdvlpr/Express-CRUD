const express = require("express");
const router = express.Router();
const usersController = require('../../controllers/users.controller');
const userValidation = require('../../validations/user.validation');
const validate = require('../../middleware/validate');

router.post("/create", userValidation.createUser, usersController.createUser);
module.exports = router;