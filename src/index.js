const express = require('express');
const bodyParser = require('body-parser')
const db = require('./lib/db');
const path = require('path');

const app = express();
let allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
}
app.use(allowCrossDomain);
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Routes
app.use(require('./routes/index'));
app.use('/user', require('./routes/user'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

