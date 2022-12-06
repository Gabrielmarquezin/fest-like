const db = require('../infra/firebaseConfig')

class Usuario{

   setIdAndPassword(id, email){
    this.id = id
    this.email = email
   }

   setPublication(idPublic, linkImg, descricao){
    this.linkImg = linkImg
    this.descricao = descricao
    this.idPublic = idPublic
   }

   setLike(like){
    this.like = like
   }

   setMessagePublic(message){
    this.message = message
   }

  async creatUser(){
    try {
        const create = await db.collection('usuarios').doc(`${this.id}`).set({email: this.email})
        
        return 'Usuario criado'
    } catch (error) {
        return{error: error}
    }
   }

   async postPublicacao(){
    try {
        const publicVazio = await db.collection('usuarios').doc(`${this.id}`).collection('publicaçoes').doc(`${this.idPublic}`).set({
            curtidas: 0,
            descricao: this.descricao,
            data: '',
            linkImg:''      
        })
    
        return 'Publicação criada'
    } catch (error) {
        return {error: error}
    }
   }

   async postLike(){
    try {
        const setLike = await db.collection('usuarios').doc(`${this.id}`).collection('publicaçoes').doc(`${this.idPublic}`).update({curtidas: this.like})

        return 'Curtiu'
    } catch (error) {
        return {error: error}
    }
   }

   async postMessage(){
    try {
        const addMessage = await db.collection('usuarios').doc(`${this.id}`).collection('publicaçoes').doc(`${this.idPublic}`).collection('mensagens').add({message: this.message, id: this.id})

        return "Mensagem Enviada!"
    } catch (error) {
        return {error: error}
    }
   }

}

const usuario = new Usuario()

module.exports = usuario




/*

                        EXEMPLOS

usuario.setIdAndPassword('ola', 'ga@gmail.com')
usuario.creatUser()
usuario.setPublication('p1', 1, '1 publicação')
usuario.postPublicacao()
usuario.setMessagePublic('postagem muito ruim')
usuario.postMessage()

*/


