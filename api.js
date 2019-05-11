const express = require('express');
const router = require('./Routes/routes');
const bodyParser = require('body-parser');


var app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/app',router);

app.listen(port,() => {
  console.log('App started on port '+port);
})
