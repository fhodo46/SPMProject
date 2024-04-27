const InventoryItem = require("../models/InventoryItem");

const createInventoryItem = async (req, res) => {
  try {
    const { itemName, quantity } = req.body;
    const newItem = new InventoryItem({
      itemName,
      quantity,
    });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateQuantity = async (req, res) => {
  try {
    const { itemId, quantity } = req.query.InventoryItemId;
    const updatedItem = await InventoryItem.findByIdAndUpdate(itemId, {
      quantity: quantity,
    });
    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const itemId = req.query.InventoryItemId;
    const deletedItem = await InventoryItem.findByIdAndDelete(itemId);
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createInventoryItem,
  updateQuantity,
  deleteItem,
};
