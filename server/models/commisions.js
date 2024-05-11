const mongoose = require("mongoose");
const { Schema } = mongoose;

const commisionSchema = new Schema({
  agentId: { type: String, required: true },
  amount: { type: Number, required: true },
  approved: { type: Boolean, required: true },
});

const Commisions = mongoose.model("Commisions", commisionSchema);

module.exports = Commisions;
