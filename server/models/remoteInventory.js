const mongoose = require("mongoose");
const InventoryItem = require("./InventoryItem");
const { Schema } = mongoose;

const remoteInventorySchema = new Schema({
  items: { type: InventoryItem, required: true },
});

const RemoteInventory = mongoose.model(
  "RemoteInventory",
  remoteInventorySchema
);

module.exports = RemoteInventory;
