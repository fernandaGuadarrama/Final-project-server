const { Schema, model } = require("mongoose");
const { Schema, model } = mongoose;

const ProgressProperties= new Schema(
  {
    property: String,
    area: String,
    photo: String,
     },
     {
    progressBar: Number,
     },
    {
    // createdAt` and `updatedAt`
    timestamps: true,
  }

);

module.exports = model('ProgressProperties', profileSchema);