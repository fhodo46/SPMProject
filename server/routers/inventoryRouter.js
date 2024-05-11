const express = require("express");
const router = express();
const inventoryController = require("../controllers/inventoryController");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

//create a new inventory item
router.post("/create", (req, res) => {
  login_controller.authorize(req, res, () => {
    inventoryController.createInventoryItem(req, res);
  });
});

//update the quantity of an inventory item
router.put("/updateQuantity", (req, res) => {
  login_controller.authorize(req, res, () => {
    inventoryController.updateQuantity(req, res);
  });
});

//delete an inventory item
router.delete("/delete", (req, res) => {
  login_controller.authorize(req, res, () => {
    inventoryController.deleteItem(req, res);
  });
});

module.exports = router;
