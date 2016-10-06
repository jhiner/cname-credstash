const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const winston = require('winston');
const jwt = require('express-jwt');
const nconf = require('nconf');
const path = require('path');

// configuration
nconf
  .argv()
  .env()
  .file(path.join(__dirname, './config.json'))
  .defaults({
    PORT: 7000,
    JWT_SECRET: 'secret'
  });

var port = nconf.get('PORT');

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(function (req, res, next) {
  winston.info(req.method + ': ' + req.url);
  next();
});

// Valid authorization token required for all routes
app.use(jwt(
    { secret: nconf.get('JWT_SECRET'), audience: 'credstash-api' }
));

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({'statusCode': 401, 'body': {message: 'Invalid token'}});
  }
});

// routes
const mappingRouter = require('./routes/mappings');
app.use('/mappings', mappingRouter);

// run the server
app.listen(port);
winston.info('cname-credstash api running on port ' + port);
