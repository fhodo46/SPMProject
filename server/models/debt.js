const mongoose = require("mongoose");
const { Schema } = mongoose;

const debtSchema = new Schema({
  nextDate: { type: Date, required: true },
  amount: { type: Number, required: true },
  monthlyPay: { type: Number, required: true },
  phoneAgentId: { type: String, required: true },
  salesAgentId: { type: String, required: true },
  clientId: { type: String, required: true },
  paid: { type: Boolean, default: "false" },
});

const Debt = mongoose.model("Debt", debtSchema);

module.exports = Debt;
