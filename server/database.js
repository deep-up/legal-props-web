import mongoose from "mongoose" ;

export async function connect (){
    try{
        await mongoose.connect('mongodb://localhost:27017/deepup', {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log(">>> mongoDB is connected");
    
    }catch (e){
        console.log("something went wrong");
        console.log(e);
    }
}

