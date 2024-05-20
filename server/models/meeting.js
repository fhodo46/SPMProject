const mongoose = require("mongoose");
const Reference = require("./reference");
const { Schema } = mongoose;

const meetingSchema = new Schema({
  salesAgentId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  phoneAgentId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  buyerId: { type: Schema.Types.ObjectId, required: true, ref: "Reference" },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  outcome: { type: String, required: true },
  type: { type: String, required: true },
  reference: {
    type: [{ type: Schema.Types.ObjectId, ref: "Reference" }],
    default: [],
  },
});

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
