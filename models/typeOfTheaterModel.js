import {model,Schema} from 'mongoose'

const typeOfTheaterSchema=new Schema({
    name:{type:String,required:true},
    numberOfPeople:{type:Number,required:true},
    contact:{type:Number,required:true},
    addOns:{type:String,required:true}
})

const TypeOfTheater=model("TypeOfTheater",typeOfTheaterSchema)
export default TypeOfTheater