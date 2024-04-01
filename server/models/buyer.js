import mongoose from "mongoose";
const { Schema } = mongoose;

const buyerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  buyDate: { type: Date, required: true },
  scheduled: { type: Boolean, required: true },
  phoneAgentId: { type: Number, required: true },
  salesAgentId: { type: Number, required: true },
});

const Buyer = mongoose.model("Buyer", buyerSchema);

export default Buyer;
