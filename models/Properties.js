const { Schema, model } = require("mongoose");

const propertiesSchema= new Schema(
  {
    property: {
      type: String,
      enum: ["Nuevo Vallarta", "Riviera Maya", "Mexico City", "Valle de Bravo", "Morelos"]
    },
    progress: {
      type: Number,
      required: true
    },
    photos: {
      type: String,
      default: "https://i.pinimg.com/564x/04/c3/c8/04c3c8e676063dc77e3d465afdc6845e.jpg"
    },
    title: String,
    location: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Properties = model("Properties", propertiesSchema);

module.exports = Properties;
