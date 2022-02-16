import dbConnect from "../../../utilities/mongo";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  // if (method === "GET") {
  //   try {
  //     const users = await User.find({});
  //     res.status(200).json(users);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // }

  // if (method === "POST") {
  //   try {
  //     const user = await User.create(req.body);
  //     res.status(201).json(user);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // }

  if (method === "PUT") {
    try {
      const filter = { email: req.query.email };
      const updateDoc = { $set: req.body };
      const result = await User.findOneAndUpdate(filter, updateDoc);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
