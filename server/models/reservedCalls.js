import mongoose from "mongoose";
const { Schema } = mongoose;

const reservedCallSchema = new Schema({
  agentId: { type: Number, required: true },
  outcome: { type: String, required: true },
  date: { type: Date, required: true },
  referenceId: { type: Number, required: true },
  comments: [{ body: String, date: Date }],
  reservationDate: { type: Date, required: true },
});

const ReservedCall = mongoose.model("ReservedCall", reservedCallSchema);

export default ReservedCall;
