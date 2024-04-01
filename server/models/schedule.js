import mongoose from "mongoose";
const { Schema } = mongoose;

const scheduleSchema = new Schema({
  saledAgentId: { type: Number, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  hadMeeting: { type: String, required: true },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

export default Schedule;
