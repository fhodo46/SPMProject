import mongoose from "mongoose";
const { Schema } = mongoose;

const commisionSchema = new Schema({
  agentId: { type: Number, required: true },
  amount: { type: Number, required: true },
  approved: { type: Boolean, required: true },
});

const Commisions = mongoose.model("Commisions", commisionSchema);

export default Commisions;
