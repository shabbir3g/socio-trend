const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    userName: {
      type: String,
      required: true,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
      max: 50,
    },
    photoURL: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    friendsRequest: {
      type: Array,
      default: [],
    },
    bookmark: {
      type: Array,
      default: [],
    },
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
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
