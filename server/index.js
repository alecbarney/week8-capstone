require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const ctrl = require('./controller.js')


app.use(express.json())
app.use(cors())

app.post('/seed', seed)

app.get('/fact', ctrl.pokeFact)

app.get('/lightning', ctrl.displayLightning)
app.get('/fire', ctrl.displayFire )
app.get('/ice', ctrl.displayIce )



app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))