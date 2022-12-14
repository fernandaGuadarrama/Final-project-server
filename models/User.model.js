const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"]
    },
    username: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 8,
    },
    email: {
      type: String,
      required: true,
      minLength: 8,
    },
    profilePic: {
      type: String,
      default:
        "https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg"
    },
    fullName: String,
    city: String,
    properties: [{type: Schema.Types.ObjectId, ref: "Properties"}]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
