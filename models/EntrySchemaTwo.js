//create model 2
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new instance of schema
let EntrySchemaTwo = new Schema(
    {
        "teacherName": String,
        "teacherEmail": String,
        "teacherCourseFocus": String,
    }
);

//export model
module.exports = mongoose.model('teacherEntries',EntrySchemaTwo);