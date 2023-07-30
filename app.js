require('dotenv').config()
const express = require('express')
const connectToDb = require('./config/db.js')

const app = express()

connectToDb()

app.use(express.json())

const userRoutes = require('./routes/userRoutes.js')

app.use('/', userRoutes)


module.exports = app