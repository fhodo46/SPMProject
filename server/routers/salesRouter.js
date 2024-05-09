const express = require("express");
const router = express();
const salesController = require('../controllers/salesController');
const bodyParser = require("body-parser");


router.use(bodyParser.json());

//create a new sale
router.post('/sales', salesController.createSale);

//get sales for a sales agent
router.get('/sales/salesAgent/:salesAgentId', salesController.getSalesAgentSales);

//get sales for a phone agent
router.get('/sales/phoneAgent/:phoneAgentId', salesController.getPhoneAgentSales);

//get sales for a buyer
router.get('/sales/buyer/:buyerId', salesController.getBuyerSales);

//get sales by payment type
router.get('/sales/paymentType', salesController.getSalesByPaymentType);

//get sales by date range
router.get('/sales/dateRange', salesController.getSalesByDateRange);

//update sale details
router.put('/sales/:saleId', salesController.updateSaleDetails);

//generate contract PDF
router.get('/sales/:saleId/contract', salesController.generateContractPDF);

module.exports = router;

