const mongoose = require("mongoose");
const { Schema } = mongoose;

const reservedCallSchema = new Schema({
  agentId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  outcome: { type: String, required: true },
  date: { type: Date, required: true },
  referenceId: { type: Schema.Types.ObjectId, required: true, ref: "Reference" },
  comments: [{ body: String, date: Date }],
  reservationDate: { type: Date, required: true },
});

const ReservedCall = mongoose.model("ReservedCall", reservedCallSchema);

module.exports = ReservedCall;
