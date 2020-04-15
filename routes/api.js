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
router.get('/student/:studentEmail',(req,res)=>{
    // res.send(`Get student by email`)
    StudentCollection.findOne({studentEmail:req.params.studentEmail},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Update student by email address
router.put('/student/:studentEmail',(req,res)=>{
    // res.send(`Update student by email`)
    StudentCollection.findOneAndUpdate({studentEmail:req.params.studentEmail},req.body,(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Delete student by email address
router.delete('/student/:studentEmail',(req,res)=>{
    // res.send(`Delete student by email`)
    StudentCollection.findOneAndDelete({studentEmail:req.params.studentEmail},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Read all students
router.get('/student',(req,res)=>{
    // res.send(`Get all students`)
    StudentCollection.find({},(errors,results)=>{
        errors ? res.send(errrors) : res.send(results);
    })
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
router.get('/teacher/:teacherEmail',(req,res)=>{
    // res.send(`Get teacher by email`)
    TeacherCollection.findOne({teacherEmail:req.params.teacherEmail},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Update teacher by email address
router.put('/teacher/:teacherEmail',(req,res)=>{
    // res.send(`Update teacher by email`)
    TeacherCollection.findOneAndUpdate({teacherEmail:req.params.teacherEmail},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Delete teacher by email address
router.delete('/teacher/:teacherEmail',(req,res)=>{
    // res.send(`Delete teacher by email`)
    TeacherCollection.findOneAndDelete({teacherEmail:req.params.teacherEmail},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Read all teachers
router.get('/teacher',(req,res)=>{
    // res.send(`Get all teachers`)
    TeacherCollection.find({},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

// //sanity
// router.get('/test',(req,res)=>{
//     res.send(`Loud and Clear`)
// })

//export router
module.exports = router;