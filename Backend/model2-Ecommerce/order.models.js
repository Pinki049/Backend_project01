import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({  // we can write in some other file and can then export 
    productId : {                              // but this schema is required here only so defined here
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity:{
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
   orderPrice:{
    type: Number,
    required: true
   },
   customer :{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
   },
   orderItems: {
    type: [orderItemSchema] // can do it other way also like done in todo , we use array to take multiple
   },
   address:{
    type: String,
    required: true
   },
   status:{
    typr: String,
    enum: ["Pending","cancelled","delivered"], // to give choices enum is used , only this 3 can be chosen
    default: "Pending"
   }

}, {timestamps: true})

export const Order = mongoose.model("Order", orderSchema)