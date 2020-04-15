//create model 1
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new instance of schema
let EntrySchemaOne = new Schema(
    {
        "studentName": String,
        "studentEmail": String
    }
);

//export model
module.exports = mongoose.model('studentEntries',EntrySchemaOne);