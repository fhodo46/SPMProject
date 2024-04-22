import mongoose from "mongoose";
const { Schema } = mongoose;

const referenceSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  profession: { type: String, required: true },
  comments: [{ body: String, date: Date }],
  qualified: { type: Boolean, required: true },
  saledAgentId: { type: Number, required: true },
  called: { type: Boolean, required: true },
});

const Reference = mongoose.model("Reference", referenceSchema);

export default Reference;