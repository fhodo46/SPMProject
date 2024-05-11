const mongoose = require("mongoose");
const { Schema } = mongoose;

const referenceSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  profession: { type: String, required: true },
  comments: [{ body: String, date: Date }],
  qualified: { type: Boolean, required: true },
  salesAgentId: { type: String, required: true },
  called: { type: Boolean, required: true },
});

const Reference = mongoose.model("Reference", referenceSchema);

module.exports = Reference;
