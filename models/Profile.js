const { Schema, model } = require("mongoose");
const { Schema, model } = mongoose;

const Profile= new Schema(
  {
    name: String,
    location: String,
    profilePic: String,
     },
    {
    // createdAt` and `updatedAt`
    timestamps: true,
  }

);

module.exports = model('Profile', profileSchema);