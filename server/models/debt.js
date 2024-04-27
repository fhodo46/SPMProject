const mongoose = require("mongoose");
const { Schema } = mongoose;

const debtSchema = new Schema({
  nextDate: { type: Date, required: true },
  amount: { type: Number, required: true },
  monthlyPay: { type: Number, required: true },
  phoneAgentId: { type: Number, required: true },
  salesAgentId: { type: Number, required: true },
  clientId: { type: Number, required: true },
});

const Debt = mongoose.model("Debt", debtSchema);

module.exports = Debt;
