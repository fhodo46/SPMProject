const mongoose = require("mongoose");
const { InventoryItem, inventoryItemSchema } = require("./InventoryItem");
const { Schema } = mongoose;

const officeInventorySchema = new Schema({
  items: [inventoryItemSchema],
});

const OfficeInventory = mongoose.model(
  "OfficeInventory",
  officeInventorySchema
);

module.exports = OfficeInventory;
