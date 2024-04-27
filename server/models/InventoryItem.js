const mongoose = require("mongoose");
const { Schema } = mongoose;

const inventoryItemSchema = new Schema({
  itemName: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const InventoryItem = mongoose.model("InventoryItem", inventoryItemSchema);

module.exports = {
  InventoryItem,
  inventoryItemSchema,
};
