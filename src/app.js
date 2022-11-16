const express = require('express')
const router = require("./routes/v1");
const dotenv = require("dotenv");
dotenv.config();
const config = require("./config/config.js");
const app = express();
const port = 3000
// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
app.use('/v1', router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})