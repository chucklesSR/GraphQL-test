import mongoose from 'mongoose'

export const connect = async () =>{
    try{
        await mongoose.connect('mongodb://localhost/mongodbgraphl', {
            useNewUrlParser: true,
            useUnifiedTopology: true            
        })        
        console.log('---Databse is connected')
    }
    catch(err){
        console.log(err)
    }
}