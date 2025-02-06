



import mongoose from "mongoose";
const cardSchema= new mongoose.Schema({
    stataimage :{
        type: String,
        require: true
    },
    statename:{
        type: String,
        require: true
    },
    statevalue :{
        type: String,
        require: true
    },
    stateplace :{
        type: String,
        require: true
    },
    statescale:{
        type: String,
        require: true
    },
    stategarages:{
        type: String,
        require: true
    },
    statesbedroom:{
        type: String,
        require: true
    },
    statebatbrooms:{
        type: String,
        require: true
    },
    statesalername:{
        type: String,
        require: true
    },
    daybefore:{
        type: String,
        require: true
    },
    stateprice:{
        type:String,
        require: true
    },
   
    
})
const CardModel= mongoose.model('card', cardSchema, 'cards');
export default CardModel;