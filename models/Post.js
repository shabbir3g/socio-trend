const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    displayName: {
      type: String,
      default: "",
    },
    userName: {
      type: String
    },
    photoURL: {
      type: String,
      default: "",
    },
    postContent: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    like: {
      type: Array,
      default: [],
    },
    comment: {
      type: Array,
      default: [],
    },
    share: {
      type: Number,
      default: 0,
    },
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
