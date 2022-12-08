const db = require('../infra/firebaseConfig')

class GetData{
   setIdAndIdDocAndMessage(id, idDoc, idMessage){
    this.id = id
    this.idDoc = idDoc
    this.idMessage = idMessage
   }

   async getDataForMessage(){
    try {
        const docMessage = await db.collection('usuarios').doc(`${this.id}`).collection('publicaçoes').doc(`${this.idDoc}`).collection('mensagens').doc(`${this.idMessage}`).get()
        const idUser = docMessage.data().id

        const message = docMessage.data().message

        const dataUser = await db.collection('usuarios').doc(`${idUser}`).get()
        const data = dataUser.data()
        data.message = message
        
        return data;
        
    } catch (error) {
        console.log('Algo deu errado: '+error)
        return{erro: error}
    }
   }

/*
   async getPublicForfeed(){
    try {
        const publis = await db.collection('usuarios').doc(`${this.id}`).collection('publicaçoes').get()

        const msgs = await db.collection('usuarios').doc('GAbriel').collection('publicaçoes').doc('p1').collection('mensagens').get()
        const data = publis.data()

        msgs.forEach(msg =>{
            const dataMsg = msg.data()
            const id = dataMsg.id
            const idMessage = 
        })
    } catch (error) {
        console.log('Algo de errado:  '+error)
    }
   }a*/
}

const getData = new GetData()


module.exports = getData