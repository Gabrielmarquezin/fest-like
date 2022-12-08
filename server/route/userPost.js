const express = require('express')
const Usuario = require('../data/postUser')
const route = express.Router()

route.post('/usuarios', async (req, res)=>{
    const id = req.body.id
    const email = req.body.email
    const perfil = req.body.perfil
    const nome = req.body.nome

    try {
      const setIdAndPassword = Usuario.setIdAndPassword(id, email, perfil, nome)
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
    const linkImg = req.body.link

    try {
        Usuario.setIdAndPassword(id)
        Usuario.setPublication(`${idDoc}`, linkImg, descricao)
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
    const idMessage = req.body.idMessage

    try {
        Usuario.setIdAndPassword(id)
        Usuario.setPublication(idDoc)
        Usuario.setMessagePublic(message, idMessage)
        const postMessage = await Usuario.postMessage()

        console.log(postMessage)
        res.send({message: message})
    } catch (error) {
        res.send({error: error})
        console.log({error: error})
    }
})

route.post('/usuarios/publicacao/messages/curtidas', async (req, res)=>{
    const like = req.body.like
    const idDoc = req.body.idDoc
    const id = req.body.id

    try {
        Usuario.setIdAndPassword(id)
        Usuario.setLike(like)
        Usuario.setPublication(idDoc)

        const response = await Usuario.postLike()
        res.send(response)
        
    } catch (error) {
        res.send({erro: error})
        console.log("Algo de errado: "+error)

    }
})

module.exports = route


//http://localhost:2005/messagemcap?id=GAbriel&idDoc=p1&idMessage=idMessage1