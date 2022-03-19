import User from "../../../models/User";
import connectDb from '.././../../db/connectDatabase';


export default async function handler(req, res) {
  const { method } = req;

  connectDb();

  // get all user
  if (method === "GET") {
    try {
      const result = await User.find({});
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
