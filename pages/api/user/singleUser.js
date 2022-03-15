import connectDb from '.././../../db/connectDatabase';
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  connectDb();

  // get single user by id
  if (method === "GET") {
    try {
      const result = await User.findOne({ _id: req.query.id });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
