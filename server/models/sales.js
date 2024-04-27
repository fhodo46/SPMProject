const mongoose = require("mongoose");
const { Schema } = mongoose;

const salesSchema = new Schema({
  saledAgentId: { type: Number, required: true },
  phoneAgentId: { type: Number, required: true },
  buyerId: { type: Number, required: true },
  fullPayment: { type: Boolean, required: true },
  upfrontPayment: { type: Number, required: true },
  date: { type: Date, required: true },
  numOfRefrences: { type: Number, required: true },
  productPrice: { type: Number, required: true },
  paymentType: { type: String, required: true },
});

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;
