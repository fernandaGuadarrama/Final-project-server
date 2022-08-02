const { Schema, model } = require("mongoose");

const propertiesSchema= new Schema(
  {
    property: {
      enum: ["Nuevo Vallarta", "Riviera Maya", "Mexico City", "Valle de Bravo"]
    },
    progress: {
      type: Number,
      required: true
    },
    photos: {
      stage1: String,
      stage2: String,
      stage3: String,
      stage4: String,
      stage5:String
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
