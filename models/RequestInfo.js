const { Schema, model } = require("mongoose");
const { Schema, model } = mongoose;

const RequestInfo= new Schema({
  name: {
    Firstname: String,
    Lastname: String,
    },
    contact:{
        email: String,
        phone: Number,
  },
  {
    property: [NuevoVallarta, RivieraMaya, MexicoCity, Morelos, ValledeBravo]
  }
}
);

module.exports = model('ProgressProperties', profileSchema);