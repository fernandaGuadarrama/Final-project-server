const { Schema, model } = require("mongoose");

const RequestInfo= new Schema({
  name: {
    Firstname: String,
    Lastname: String,
    },
    contact:{
        email: String,
        phone: Number,
  },
  area:{
    enum: ["NuevoVallarta", "RivieraMaya", "MexicoCity"," Morelos", "ValledeBravo"]
  }
}
);


// const RequestInfo = model("RequestInfo", RequestInfoSchema);

module.exports = RequestInfo;
