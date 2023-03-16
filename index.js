require('dotenv').config()
const express = require('express')
const bodyParser = require("body-parser")
const app = express();
//const register = require('./routes/auth')
const mongoose = require('mongoose');
const register = require('./controllers/auth')
const port = 4004

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/auth', register)


mongoose.connect(process.env.DB_CONN)
.then(()=> console.log('Database Connected...'))
.catch(err => console.log(err))


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})