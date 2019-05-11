const router = require('express').Router();
const mongoose = require('mongoose');
const myModel = require('../Models/models');

const URL ="mongodb://myapi:123456myapi@ds155076.mlab.com:55076/myapi"
mongoose.connect(URL,{ useNewUrlParser: true }).then(() => {
  console.log('Database connection successfull...')
})
//var db = mongoose.connection;

//db.once('open', function () {

router.get('/',(req,res,next) => {
  myModel.find({}).then((doc) => {
    res.json(doc);
  })

})


module.exports = router;
