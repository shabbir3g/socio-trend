import dbConnect from "../../../utilities/mongo";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  // get single user by email
  if (method === "GET") {
    try {
      const result = await User.findOne({ email: req.query.email });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  // get all user
  if (method === "GET") {
    try {
      const result = await User.find({});
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // save user data after register
  if (method === "POST") {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // save user data after google signup
  if (method === "PUT") {
    try {
      const user = req.body;
      const filter = { email: user.email };
      const updateDoc = { $set: user };
      const result = await User.findOneAndUpdate(filter, updateDoc, {
        new: true,
        upsert: true,
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
