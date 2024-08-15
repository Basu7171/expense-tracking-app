const express = require('express')
const cors = require('cors')
const configureDB = require('./config/db')
const{checkSchema}=require('express-validator')
const Counter = require('./app/models/counter-model')
const {counterValidationSchema,counterIdValidationSchema} = require('./app/validation/counter-validaton')
const counterCltr = require('./app/controllers/counter-controller')
const { ChainCondition } = require('express-validator/lib/context-items')

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())
configureDB()


app.post('/api/counters',checkSchema(counterValidationSchema),counterCltr.create)
app.get('/api/counters',checkSchema(counterValidationSchema),counterCltr.list)

app.get('/api/counters/:id',checkSchema(counterValidationSchema),checkSchema(counterIdValidationSchema),counterCltr.show)
app.delete('/api/counters/:id',checkSchema(counterValidationSchema),checkSchema(counterIdValidationSchema),counterCltr.delete)
app.put('/api/counters/:id',checkSchema(counterValidationSchema),checkSchema(counterIdValidationSchema),counterCltr.update)

app.listen(port,()=>{
    console.log('Server running on port',port)
})
