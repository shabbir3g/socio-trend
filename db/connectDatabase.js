import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    if (mongoose.connections[0].readyState) return;
    else {
      mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tg4nc.mongodb.net/socioTrend?retryWrites=true&w=majority`
      );
    }
  } catch (err) {
    const error = {
      errorTitle: 'database connection failed',
      errorMessage: err.message,
    };
    console.log(error);
  }
};

export default connectDb;
