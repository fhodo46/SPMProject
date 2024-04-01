import mongoose from "mongoose";
const { Schema } = mongoose;

const meetingSchema = new Schema({
  saledAgentId: { type: Number, required: true },
  phoneAgentId: { type: Number, required: true },
  buyerId: { type: Number, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  outcome: { type: String, required: true },
  type: { type: String, required: true },
  refrence: {
    type: [String],
    default: undefined,
    required: true,
  },
});

const Meeting = mongoose.model("Meeting", meetingSchema);

export default Meeting;
