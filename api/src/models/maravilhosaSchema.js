const mongoose = require('mongoose')
const Schema = mongoose.Schema

const maravilhosaSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId, //tipo do dado
        auto: true, //autogerado?
        required: true //é obrigatório?
    },
    name:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required:true
    },
    subtitle:{
        type: String,
        required: true
    },
    about:{
        type: String,
        required: true
    },
    phrase:{
        type: String,
        required: true
    },
    history:[{
        type: String,
        required: true
    }],
    addedBy:{
        type: String,
        required: true
    }
},
{
    collection: "maravilhosa",
    versionKey: false
   
  }
);


const maravilhosaCollection = mongoose.model('maravilhosa', maravilhosaSchema)

module.exports = {maravilhosaCollection}
