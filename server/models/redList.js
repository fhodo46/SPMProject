import mongoose from "mongoose";
const { Schema } = mongoose;

const redListSchema = new Schema({
  agentId: { type: Number, required: true },
  callId: { type: Number, required: true },
  outcome: { type: String, required: true },
  renewaldate: { type: Date, required: true },
  referenceId: { type: Number, required: true },
  comments: [{ body: String, date: Date }],
});

const RedList = mongoose.model("RedList", redListSchema);

export default RedList;
