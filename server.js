const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(
    'mongodb+srv://matheus:matheus@application.tbwcy.mongodb.net/nodeapi?retryWrites=true&w=majority',
    { useUnifiedTopology: true },
    { useNewUrlParser: true },
)
requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(3001)
