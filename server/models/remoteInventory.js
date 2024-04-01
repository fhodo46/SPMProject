import mongoose from "mongoose";
import InventoryItem from "./InventoryItem";
const { Schema } = mongoose;

const remoteInventorySchema = new Schema({
  items: { type: InventoryItem, required: true },
});

const RemoteInventory = mongoose.model("RemoteInventory", remoteInventorySchema);

export default RemoteInventory;
