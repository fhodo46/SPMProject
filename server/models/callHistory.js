const mongoose = require("mongoose");
const { Schema } = mongoose;

const callHistorySchema = new Schema({
  agentId: { type: Number, required: true },
  outcome: { type: String, required: true },
  date: { type: Date, required: true },
  referenceId: { type: Number, required: true },
  comments: [{ body: String, date: Date }],
});

const CallHistory = mongoose.model("CallHistory", callHistorySchema);

module.exports = CallHistory;
