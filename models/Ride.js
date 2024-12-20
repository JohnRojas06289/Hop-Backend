import mongoose from "mongoose";
const rideSchema=new mongoose.Schema({
    driveremail:{
        type:String,
        
    },
    bookedPassengers:{
        type:Number,
        default:0
    },
    bookedEmail:{
        type:[String],
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    hours:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
    },
    stopovers:{
        type:[String],

    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    passengers:{
        type:Number,
        required:true
    },
    info:{
        type:String,
        requried:true
    },
    price:{
        type:Number,
        required:true
    },
    uptime:{
        type:String,
        required:true
    },
    routeindex:{
        type:Number,
        required:true
    },
    featured: {
        type: Boolean,
        default: false,
      },
},{timestamps:true});
export default mongoose.model('Ride',rideSchema);