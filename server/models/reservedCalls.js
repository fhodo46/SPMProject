const mongoose = require("mongoose");
const { Schema } = mongoose;

const reservedCallSchema = new Schema({
  agentId: { type: String, required: true },
  outcome: { type: String, required: true },
  date: { type: Date, required: true },
  referenceId: { type: String, required: true },
  comments: [{ body: String, date: Date }],
  reservationDate: { type: Date, required: true },
});

const ReservedCall = mongoose.model("ReservedCall", reservedCallSchema);

module.exports = ReservedCall;
