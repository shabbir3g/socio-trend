import dbConnect from "../../../utilities/mongo";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "PUT") {
    try {
      const filter = { email: req.query.email };
      const updateDoc = { $set: req.body.userData };
      const result = await User.findOneAndUpdate(filter, updateDoc);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
