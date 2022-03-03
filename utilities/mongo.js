import mongoose from "mongoose";

const MONGO_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tg4nc.mongodb.net/socioTrend?retryWrites=true&w=majority`;

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      autoIndex: false,
    });
    console.log("mongodb connected...");
  } catch (err) {
    console.log(err);
  }
};

export default dbConnect;
