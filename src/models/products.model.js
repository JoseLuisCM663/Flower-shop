import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    barcode:{
        type: String,
        unique: true,
        required: true
    },
    description:String,
    price:Number,
    cost:Number,
    stock:Number,
    colors:String,
    status:Number
},{
    timestamps:true,
    versionKey:false
})


export default model('Products', productSchema);