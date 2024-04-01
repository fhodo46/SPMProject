import mongoose from "mongoose";
const { Schema } = mongoose;
const User = require("./user");
const Schedule = require("./schedule");
const Meetings = require("./meeting");

const salesAgentSchema = new Schema({
  schedule: {
    type: [Schedule],
    required: true,
  },
  meetings: [Meetings],
  meetingsCompletitionStatus: [Number],
});

const SalesAgent = User.discriminator("SalesAgent", salesAgentSchema);

export default SalesAgent;
