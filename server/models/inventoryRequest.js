import mongoose from "mongoose";
import InventoryItem from "./InventoryItem";
const { Schema } = mongoose;

const inventoryRequestSchema = new Schema({
  itemsId: { type: Number, required: true },
  technicianId: { type: Number, required: true },
});

const InventoryRequest = mongoose.model("InventoryRequest", inventoryRequestSchema);

export default InventoryRequest;