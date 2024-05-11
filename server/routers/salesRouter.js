const express = require("express");
const router = express();
const salesController = require("../controllers/salesController");
const login_controller = require("../controllers/userProxy");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

//create a new sale
router.post("/create", (req, res) => {
  login_controller.authorize(req, res, () => {
    salesController.createSale(req, res);
  });
});

//get sales for a sales agent
router.get("/salesAgent/:salesAgentId", (req, res) => {
  login_controller.authorize(req, res, () => {
    salesController.getSalesAgentSales(req, res);
  });
});

//get sales for a phone agent
router.get("/phoneAgent/:phoneAgentId", (req, res) => {
  login_controller.authorize(req, res, () => {
    salesController.getPhoneAgentSales(req, res);
  });
});

//get sales for a buyer
//router.get("/sales/buyer/:buyerId", salesController.getBuyerSales);

//get sales by payment type
router.get("/paymentType", (req, res) => {
  login_controller.authorize(req, res, () => {
    salesController.getSalesByPaymentType(req, res);
  });
});

//get sales by date range
router.get("/dateRange", (req, res) => {
  login_controller.authorize(req, res, () => {
    salesController.getSalesByDateRange(req, res);
  });
});

//update sale details
router.put("/update/:saleId", (req, res) => {
  login_controller.authorize(req, res, () => {
    salesController.updateSaleDetails(req, res);
  });
});

//generate contract PDF
router.get("/:saleId/contract", salesController.generateContractPDF);

module.exports = router;
