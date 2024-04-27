const mongoose = require("mongoose");
const Reference = require("./reference");
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
    type: [{ type: Schema.Types.ObjectId, ref: "Refrence" }],
    default: [],
  },
});

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
