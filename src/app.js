const express = require('express')
const router = require("./routes");
const dotenv = require("dotenv");
dotenv.config();
const config = require("./config/config.js");
const app = express();
const port = 3000
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})