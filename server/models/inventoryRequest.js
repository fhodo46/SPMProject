const mongoose = require("mongoose");
const { Schema } = mongoose;

const inventoryRequestSchema = new Schema({
  itemsId: { type: Number, required: true },
  technicianId: { type: Number, required: true },
});

const InventoryRequest = mongoose.model(
  "InventoryRequest",
  inventoryRequestSchema
);

module.exports = InventoryRequest;
