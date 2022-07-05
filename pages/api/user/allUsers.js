import dbConnect from "../../../db/connectDatabase";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method, query } = req;

  dbConnect();

  // get all user
  if (method === "GET") {
    try {
      const keyword = query.search
        ? {
            $or: [
              { displayName: { $regex: query.search, $options: "i" } },
              { username: { $regex: query.search, $options: "i" } },
            ],
          }
        : {};
      const result = await User.find(keyword);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
