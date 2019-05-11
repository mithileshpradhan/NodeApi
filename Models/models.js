const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var mySchema = new Schema({
  name:String,
  Location:String
})

var myModel = mongoose.model('myNewModel',mySchema,'demodata');

module.exports = myModel;
