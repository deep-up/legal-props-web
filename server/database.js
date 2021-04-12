import mongoose from "mongoose" ;

export async function connect (){
    try{
        await mongoose.connect('mongodb://localhost:27017/deepup', {
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useFindAndModify:true,
            useCreateIndex:true
        });
        console.log(">>> mongoDB is connected");
    
    }catch (e){
        console.log(e);
    }
}

