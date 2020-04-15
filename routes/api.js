//create route
let express = require('express');
let router = express.Router();

//import models
let StudentCollection = require('../models/EntrySchemaOne');
let TeacherCollection = require('../models/EntrySchemaTwo')

//Create student
router.post('/student',(req,res)=>{
    // res.send(`Created student`)
    StudentCollection.create(req.body,(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
   
})

//Read student by email address
router.get('/student/:emailAddress',(req,res)=>{
    // res.send(`Get student by email`)
})

//Update student by email address
router.put('/student/:emailAddress',(req,res)=>{
    // res.send(`Update student by email`)
})

//Delete student by email address
router.delete('/student/:emailAddress',(req,res)=>{
    // res.send(`Delete student by email`)
})

//Read all students
router.get('/student',(req,res)=>{
    // res.send(`Get all students`)
})

/////////////////////////////////////////////////////////////////

//Create teacher
router.post('/teacher',(req,res)=>{
    // res.send(`Created teacher`)
    TeacherCollection.create(req.body,(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Read teacher by email address
router.get('/teacher/:emailAddress',(req,res)=>{
    res.send(`Get teacher by email`)
})

//Update teacher by email address
router.put('/teacher/:emailAddress',(req,res)=>{
    res.send(`Update teacher by email`)
})

//Delete teacher by email address
router.delete('/teacher/:emailAddress',(req,res)=>{
    res.send(`Delete teacher by email`)
})

//Read all teachers
router.get('/teacher',(req,res)=>{
    res.send(`Get all teachers`)
})

// //sanity
// router.get('/test',(req,res)=>{
//     res.send(`Loud and Clear`)
// })

//export router
module.exports = router;