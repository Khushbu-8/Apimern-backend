const express = require("express");
const connectDB = require("./config/db");
require ("dotenv").config()
const app = express()
const port = process.env.PORT ;
connectDB()
const cors = require('cors')
app.use(cors({
    origin: ['https://apimern-frontend.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials : true

}));

app.use(express.json());

app.set('view engine','ejs')
app.use(express.urlencoded())


app.use('/api/v1',require('./routes/indexRoutes'))


app.listen(port,(err) =>{
    if(err) console.log(err);

    console.log(`server is running on port ${port}`)
})
