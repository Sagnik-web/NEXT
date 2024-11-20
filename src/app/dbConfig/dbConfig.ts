import mongoose from "mongoose";




export async function connect() {
    
    try {
        
        mongoose.connect(process.env.MONGODB_URI!)

        const connection = mongoose.connection

        connection.on('connection',()=>{
            console.log("DB Connected.");
            
        })

        connection.on('error',(err)=>{
            console.log("Database is not connected");
            console.log(err);
                        
        })



    } catch (error) {
        console.log("Error",error);
    }


}