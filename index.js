//Node.js - CRUD backend web service

//entry point
let express = require('express');
let app = express();

//port number
let portNumber = 2112;

//import and mount route
let api = require('./routes/api');
app.use('/api',api);

//json middleware
app.use(express.json());

//listen on port
app.listen(portNumber,()=>{
    console.log(`Listening on port ${portNumber}`);
})