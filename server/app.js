const express = require('express')
const cors = require('cors')

const route = require('./route/userPost')
const routeGet = require('./route/getData')
const app = express()
const port = process.env.PORT || 2005

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/', route)
app.use('/', routeGet)

app.listen(port, ()=>{
    console.log('RODADANDO EM http//localhost:2005')
})