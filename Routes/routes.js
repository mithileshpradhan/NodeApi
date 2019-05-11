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

router.post('/',(req,res,next) => {

  var newUser = new myModel({
     name:req.body.name,
     Location:req.body.Location
     
  });

  newUser.save().then((doc) => {
    
    console.log(doc)
    
  })
})

module.exports = router;
