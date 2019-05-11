const express = require('express');
const router = require('./Routes/routes');


var app = express();
const port = 4000;


app.use('/app',router);

app.listen(port,() => {
  console.log('App started on port '+port);
})
