const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const resturantsSchema=new Schema({
    name:{
        type:String,
        
    },
    city:{
        type:String,
       
    },
    cuisine:{
        type:String,
        // required:true,
    },
    rating:{
        type:Number,
        // required:true,
    },
    priceRange:{
        type:Number,
    },
    address:{
        type:String
    },
    description:{
        type:String
    },
    img:{
        type:Object,
        default:"/public/images/navlogo.png", 
        set: (v) => v === "" ? "/public/images/navlogo.png" : v,
        // required:true,
    },
});

const Resturants=new mongoose.model("Resturants",resturantsSchema);

module.exports=Resturants;