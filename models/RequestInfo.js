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
      enum: ["NuevoVallarta", "RivieraMaya", "MexicoCity"," Morelos", "ValledeBravo"]
    }
  }
  );


  
  const RequestInfo = model("RequestInfo", RequestInfoSchema);

  module.exports = RequestInfo;
