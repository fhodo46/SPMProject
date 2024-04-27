const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./user");
const Schedule = require("./schedule");
const Meetings = require("./meeting");
const Refrence = require("./reference");
const ReservedPhoneCalls = require("./reservedCalls");

const phoneAgentSchema = new Schema({
  fullSchedule: [Schedule],
  latestRefrences: [Refrence],
  scheduledMeetings: [Meetings],
  reservedPhoneCalls: [ReservedPhoneCalls],
});

const PhoneAgent = User.discriminator("PhoneAgent", phoneAgentSchema);

module.export = PhoneAgent;
