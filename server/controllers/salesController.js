const Sales = require("../models/sales");
const {
  createSalesAgentCommission,
} = require("../controllers/commisionController");
const {
  createPhoneAgentCommission,
} = require("../controllers/commisionController");
const { create5euroCommision } = require("../controllers/commisionController");
const { createDebt } = require("../controllers/debtController");
const { createReference2 } = require("../controllers/referenceController");

//create a new sale
const createSale = async (req, res) => {
  try {
    const new_sales_info = req.body;

    const discount = calculateDiscount(new_sales_info.numOfReferences);
    new_sales_info.productPrice = new_sales_info.productPrice - discount;

    const newSale = new Sales({ ...new_sales_info });
    const savedSale = await newSale.save();
    res.status(201).json(savedSale);
    createSalesAgentCommission(savedSale);
    createPhoneAgentCommission(savedSale);
    create5euroCommision(new_sales_info.salesAgentId);

    if (!new_sales_info.fullPayment) {
      createDebt(newSale);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

//get sales for a sales agent (from frontend)
const getSalesAgentSales = async (req, res) => {
  try {
    const salesAgentId = req.params.salesAgentId;
    const sales = await Sales.find({ salesAgentId });
    res.status(200).json(sales);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get sales for a sales agent in the last month (backend)
const getSalesAgentSales2 = async (salesAgentId) => {
  const endTime = Date.now;
  const startTime = new Date();
  startTime.setMonth(startTime.getMonth() - 1);

  const sales = await Sales.countDocuments({
    salesAgentId: salesAgentId,
    date: { $gte: startTime, $lte: endTime },
  });

  return sales;
};

//get sales for a phone agent
const getPhoneAgentSales = async (req, res) => {
  try {
    const phoneAgentId = req.params.phoneAgentId;
    const sales = await Sales.find({ phoneAgentId });
    res.status(200).json(sales);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get sales for a buyer
const getBuyerSales = async (req, res) => {
  try {
    const buyerId = req.params.buyerId;
    const sales = await Sales.find({ buyerId });
    res.status(200).json(sales);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get sales by payment type
const getSalesByPaymentType = async (req, res) => {
  try {
    const { paymentType } = req.query;
    const sales = await Sales.find({ paymentType });
    res.status(200).json(sales);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get sales by date range
const getSalesByDateRange = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const sales = await Sales.find({
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    });
    res.status(200).json(sales);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//update sale details
const updateSaleDetails = async (req, res) => {
  try {
    const saleId = req.params.saleId;
    const { paymentType, upfrontPayment, numOfReferences } = req.body;
    const updatedSale = await Sales.findByIdAndUpdate(
      saleId,
      { paymentType, upfrontPayment, numOfReferences },
      { new: true }
    );
    res.status(200).json(updatedSale);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//calculate discount
const calculateDiscount = (numOfReferences) => {
  if (
    typeof numOfReferences === "number" &&
    !isNaN(numOfReferences) &&
    numOfReferences >= 0
  ) {
    const discount = Math.min(numOfReferences * 50, 500);
    return discount;
  } else {
    return 0;
  }
};

//generate contract PDF
const generateContractPDF = async (req, res) => {
  try {
    const saleId = req.params.saleId;
    const sale = await Sales.findById(saleId);
    const pdfBuffer = await pdfService.generateContractPDF(sale);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=contract.pdf");
    res.send(pdfBuffer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//calculate commission for sale
// const calculateCommissionForSale = async(req, res) => {
//   try {
//     const saleId = req.params.saleId;
//     const sale = await Sales.findById(saleId);
//     const { upfrontPayment, numOfReferences } = sale;

//     let commission;
//     if (numOfReferences === 10) {
//       if (upfrontPayment >= 295) commission = 25;
//       else if (upfrontPayment >= 200) commission = 20;
//       else if (upfrontPayment >= 100) commission = 15;
//       else if (upfrontPayment >= 50) commission = 10;
//     } else {
//       if (upfrontPayment >= 295) commission = 20;
//       else if (upfrontPayment >= 200) commission = 15;
//       else if (upfrontPayment >= 100) commission = 10;
//       else if (upfrontPayment >= 50) commission = 5;
//     }

//     res.status(200).json({ commission });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// }

module.exports = {
  createSale,
  getSalesAgentSales,
  getSalesAgentSales2,
  getPhoneAgentSales,
  getBuyerSales,
  getSalesByPaymentType,
  getSalesByDateRange,
  updateSaleDetails,
  //calculateCommissionForSale,
  calculateDiscount,
  generateContractPDF,
};
