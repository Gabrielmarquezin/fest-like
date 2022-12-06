const express = require('express')
const Usuario = require('../data/postUser')
const route = express.Router()

route.post('/usuarios', async (req, res)=>{
    const id = req.body.id
    const email = req.body.email

    try {
      const setIdAndPassword = Usuario.setIdAndPassword(id, email)
      const create =  await Usuario.creatUser()

      console.log(create)
      res.send({message: create})
    } catch (error) {
      console.log(error)
      res.send({error: 'server not found'})
    }
    
})

route.post('/usuarios/publicacao', async (req, res)=>{
    const id = req.body.id
    const idDoc = req.body.idDoc
    const descricao = req.body.descricao

    try {
        Usuario.setIdAndPassword(id)
        Usuario.setPublication(`${idDoc}`, 1, descricao)
        const postPublic = await Usuario.postPublicacao()

        console.log(postPublic)
        res.send({message: postPublic})
    } catch (error) {
        res.send({error: error})
        console.log(error)
    }
})

route.post('/usuarios/publicacao/messages', async (req, res)=>{
    const id = req.body.id
    const idDoc = req.body.idDoc
    const message = req.body.message

    try {
        Usuario.setMessagePublic(message)
        const postMessage = await Usuario.postMessage()

        console.log(postMessage)
        res.send({message: message})
    } catch (error) {
        res.send({error: error})
        console.log({error: error})
    }
})

module.exports = route