import mongoose from "mongoose";
import InventoryItem from "./InventoryItem";
const { Schema } = mongoose;

const technicianInventorySchema = new Schema({
  items: { type: InventoryItem, required: true },
});

const TechnicianInventory = mongoose.model(
  "TechnicianInventory",
  technicianInventorySchema
);

export default TechnicianInventory;
