const mongoose = require("mongoose");
const { Schema } = mongoose;

const scheduleSchema = new Schema({
  salesAgentId: { type: Number, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  status: {
    type: String,
    enum: ["free", "scheduled"],
    default: "free",
  },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
