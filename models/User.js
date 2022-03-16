const mongoose = require("mongoose");
const FriendsSchema = require('../subSchema/friendSchema');
const UserSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    userName: {
      type: String,
      require: true,
      default: "",
    },
    email: {
      type: String,
      required: true,
      max: 50
    },
    photoURL: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    friends: [FriendsSchema],
    post: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    education: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    from: {
      type: String,
      default: "",
    },
    relationship: {
      type: String,
      default: "",
    },
    workplace: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
