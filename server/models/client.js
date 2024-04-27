const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  profession: { type: String, required: true },
  comments: [{ body: String, date: Date }],
  scheduled: { type: Boolean, required: true },
  phoneAgentId: { type: Number, required: true },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
