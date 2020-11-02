const maravilhosaTeste = require('../models/maravilhosaSchema')

const getMaravilhosas =  (req,res) => {
    console.log(req.url)
    maravilhosaTeste.maravilhosaCollection.find((error, maravilhosa) =>{
        if(error){
            return res.status(500).send(error)
        } else{
            return res.status(200).send(maravilhosa)
        }
    })
}
//getMaravilhosaById
const getMaravilhosaById =  (req,res) => {
   const idParam = req.params.id
   maravilhosaTeste.maravilhosaCollection.findById(idParam, (error, maravilhosa) =>{
       if(error){
           return res.status(500).send(error)
       } else {
           if(maravilhosa){
               return res.status(200).send(maravilhosa)
           } else{
               return res.status(404).send("Maravilhosa não encontrada :( ")
           }
       }
   }) 
}

//addMaravilhosa 
const addMaravilhosa = (req,res) => {
    console.log(req.url)
    const maravilhosaBody = req.body
    const maravilhosa = new maravilhosaTeste.maravilhosaCollection(maravilhosaBody)

    maravilhosa.save((error) =>{
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(201).send(maravilhosa)
        }
    })
}

//updateMaravilhosa 
const updateMaravilhosa = (req, res) => {
    const idParam = req.params.id
    const maravilhosaBody = req.body
    const novo = {new: true} //quando o documento for inserido vai retornar o valor modificado e não o original, que é o que acontece por padrão

    maravilhosaTeste.maravilhosaCollection.findByIdAndUpdate(
        idParam,
        {$set:{maravilhosaBody}}, // adicionei o $set pra mostrar como ficaria, para o caso de não passar valores para todos os atributos novamente.
        novo,
        (error, maravilhosa) =>{
            if(error){
                return res.status(500).send(error)
            } else if (maravilhosa) {
                return res.status(200).send(maravilhosa)
            } else{
                return res.sendStatus(404)
            }
        }
    )    
}

//deleteMaravilhosa
const deleteMaravilhosa = (req, res) => {
    const idParam = req.params.id
    maravilhosaTeste.maravilhosaCollection.findByIdAndDelete(idParam, (error, maravilhosa) =>
    {
        if(error){
            return res.status(500).send(error)
            } else{
                if(maravilhosa){
                    return res.status(200).send("A maravilhosa foi apagada")
                }else {
                    return res.sendStatus(404)
                }
            }
        })
    } 

module.exports = {
    getMaravilhosas, 
    getMaravilhosaById, 
    addMaravilhosa, 
    updateMaravilhosa, 
    deleteMaravilhosa 
}