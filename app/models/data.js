const mongoose = require('mongoose'),
Schema = mongoose.Schema;

//create Schema

const dataSchema = new Schema({
  CAMIS: Number,
  DBA: String,
  BORO: String,
  BUILDING: Number,
  STREET: String,
  ZIPCODE: Number,
  PHONE: String,
  CUISINE_DESCRIPTION: String,
  INSPECTION: String,
  ACTION: String,
  VIOLATION_CODE: String,
  VIOLATION_DESCRIPTION: String,
  CRITICAL_FLAG: String,
  SCORE: Number,
  GRADE: String,
  GRADE_DATE: String,
  RECORD_DATE: String,
  INSPECTION_TYPE: String
}, { collection: 'inspectionTest'});

const dataModel = mongoose.model('Data', dataSchema);


module.exports = dataModel;

//create model






//export model
