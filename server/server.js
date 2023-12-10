const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const xss = require('xss-clean'); //middleware that prevents from the people for breaking the server
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./routes');



const mongoUri = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASS}@cluster0.7hix8bo.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(mongoUri,{})


//body parse
app.use(express.json())




//sanitize
app.use(xss())
app.use(mongoSanitize())


//routes
app.use('/api',routes)



const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})