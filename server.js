const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

const mappingRouter = require('./routes/mappings');

var port = process.env.PORT || 7000;

app.use(cors());
app.use(bodyParser.json());

// TODO: API Authorization

// routes
app.use('/mappings', mappingRouter);

// run the server
app.listen(port);
console.log('cname-credstash api running at http://localhost:' + port);
