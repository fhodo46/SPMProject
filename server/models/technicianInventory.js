const mongoose = require("mongoose");
const InventoryItem = require("./InventoryItem");
const { Schema } = mongoose;

const technicianInventorySchema = new Schema({
  items: { type: InventoryItem, required: true },
});

const TechnicianInventory = mongoose.model(
  "TechnicianInventory",
  technicianInventorySchema
);

module.exports = TechnicianInventory;
