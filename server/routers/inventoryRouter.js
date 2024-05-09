const express = require("express");
const router = express();
const inventoryController = require('../controllers/inventoryController');
const bodyParser = require("body-parser");


router.use(bodyParser.json());

//create a new inventory item
router.post('/inventory', inventoryController.createInventoryItem);

//update the quantity of an inventory item
router.put('/inventory/quantity', inventoryController.updateQuantity);

//delete an inventory item
router.delete('/inventory', inventoryController.deleteItem);

module.exports = router;