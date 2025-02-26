const mongoose = require('mongoose')
const { deleteMany, insertMany } = require('../models/coaster.model')
const Coaster = require('../models/coaster.model')

const databaseName = 'themepark'
const connectionString = `mongodb://127.0.0.1/${databaseName}`

mongoose
    .set('strictQuery', true)
    .connect(connectionString)
    .then(connectionInfo => console.log(`Connected to Mongo! Database name: "${connectionInfo.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))