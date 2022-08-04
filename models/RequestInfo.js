  const { Schema, model } = require("mongoose");

  const RequestInfoSchema= new Schema({
    Firstname: {
      type: String,
      required: true
    },
    Lastname:{
      type: String,
    },
      email: String,
      phone: Number,
  
    area: {
      type: String,
      enum: ["Nuevo Vallarta", "Riviera Maya", "Mexico City","Morelos", "Valle de Bravo"]
    }
  }
  );


  
  const RequestInfo = model("RequestInfo", RequestInfoSchema);

  module.exports = RequestInfo;
