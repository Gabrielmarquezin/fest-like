const express = require('express')
const Usuario = require('../data/postUser')
const routeGet = express.Router()
const getData = require('../data/getData')

routeGet.get('/messagemcap', async (req, res)=>{
    const id = req.query['id']
    const idDoc = req.query['idDoc']
    const idMessage = req.query['idMessage']
    
    try {
        getData.setIdAndIdDocAndMessage(id, idDoc, idMessage)
        const resq  = await getData.getDataForMessage()
        
        res.send(resq)
    } catch (error) {
        res.send('eroo')
        console.log('DEU ERRADOOO: '+error)
    }
})

module.exports = routeGet