const mongoose = require("mongoose");
const { Schema } = mongoose;

const callHistorySchema = new Schema({
  agentId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  outcome: { type: String, required: true },
  date: { type: Date, required: true },
  referenceId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Reference",
  },
  comments: [{ body: String, date: Date }],
});
const CallHistory = mongoose.model("CallHistory", callHistorySchema);

module.exports = CallHistory;
