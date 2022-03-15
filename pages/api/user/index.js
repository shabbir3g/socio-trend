import connectDb from '.././../../db/connectDatabase';
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  connectDb();

  // get single user by email
  if (method === "GET") {
    try {
      const result = await User.findOne({ email: req.query.email });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // save user data after register
  if (method === "POST") {
    try {
      const user = req.body;
      user.userName = req.body.displayName.replace(/[\. ,:-]+/g, "-").toLowerCase();
      const result = await User.create(user);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // save user data after google signup
  if (method === "PUT") {
    try {
      const user = req.body;
      user.userName = req.body.displayName.replace(/[\. ,:-]+/g, "-").toLowerCase();
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
