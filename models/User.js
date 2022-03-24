const mongoose = require('mongoose');
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
      unique: true,
      default: '',
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
      default: '',
    },
    coverPicture: {
      type: String,
      default: '',
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
    education: {
      type: String,
      default: '',
    },
    city: {
      type: String,
      default: '',
    },
    from: {
      type: String,
      default: '',
    },
    relationship: {
      type: String,
      default: '',
    },
    workplace: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: '',
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
