import connectDb from '.././../../db/connectDatabase';
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  connectDb();

  // get single user by userName
  if (method === "GET") {
    try {
      const result = await User.findOne({ userName: req.query.userName });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
