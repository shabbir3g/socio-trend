import mongoose from "mongoose";

const connectDb = async() => {
   try{
        if(mongoose.connections[0].readyState) {
            console.log('database alredy connected')
        }
        else {
            mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tg4nc.mongodb.net/socioTrend?retryWrites=true&w=majority`)
        }
   }
   catch(error) {
       const errorMessage = {
           title: 'database connection failed',
           errorMessage: error.message,
       }
       console.log(errorMessage);
   }
}

export default connectDb;