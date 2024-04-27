const Debt = require("../models/debt");
const Sales = require("../models/sales");

// Create a new debt
const createDebt = async (Sales, monthlyPayment, res) => {
  try {
    const {
      salesAgentId,
      phoneAgentId,
      buyerId,
      fullPayment,
      upfrontPayment,
      date,
      numOfReferences,
      productPrice,
      paymentType,
    } = Sales;

    //set next date
    const nextDate = new Date();
    nextDate.setMonth(nextDate.getMonth() + 1);
    amount = (productPrice - upfrontPayment) / monthlyPayment;

    clientId = buyerId;
    const newDebt = new Debt({
      nextDate,
      amount,
      monthlyPayment,
      phoneAgentId,
      salesAgentId,
      clientId,
    });
    const savedDebt = await newDebt.save();
    res.status(201).json(savedDebt);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get a debt by ID
const getDebt = async (req, res) => {
  try {
    const debtId = req.params.debtId;
    const debt = await Debt.findById(debtId);
    if (!debt) {
      return res.status(404).json({ error: "Debt not found" });
    }
    res.status(200).json(debt);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a debt's payment date
const updateDebtPaymentDate = async (req, res) => {
  try {
    const debtId = req.params.debtId;
    const { nextDate } = req.body;
    const updatedDebt = await Debt.findByIdAndUpdate(
      debtId,
      { nextDate },
      { new: true }
    );
    if (!updatedDebt) {
      return res.status(404).json({ error: "Debt not found" });
    }
    res.status(200).json(updatedDebt);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a debt's amount
const updateDebtAmount = async (req, res) => {
  try {
    const debtId = req.params.debtId;
    const { amount } = req.body;
    const updatedDebt = await Debt.findByIdAndUpdate(
      debtId,
      { amount },
      { new: true }
    );
    if (!updatedDebt) {
      return res.status(404).json({ error: "Debt not found" });
    }
    res.status(200).json(updatedDebt);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a debt's monthly payment
const updateDebtMonthlyPayment = async (req, res) => {
  try {
    const debtId = req.params.debtId;
    const { monthlyPay } = req.body;
    const updatedDebt = await Debt.findByIdAndUpdate(
      debtId,
      { monthlyPay },
      { new: true }
    );
    if (!updatedDebt) {
      return res.status(404).json({ error: "Debt not found" });
    }
    res.status(200).json(updatedDebt);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//delete a debt
const deleteDebt = async (req, res) => {
  try {
    const debtId = req.params.debtId;
    const deletedDebt = await Debt.findByIdAndDelete(debtId);
    if (!deletedDebt) {
      return res.status(404).json({ error: "Debt not found" });
    }
    res.status(200).json({ message: "Debt deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get all debts
const getAllDebts = async (req, res) => {
  try {
    const debts = await Debt.find();
    res.status(200).json(debts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get debts by client
const getDebtsByClient = async (req, res) => {
  try {
    const clientId = req.params.clientId;
    const debts = await Debt.find({ clientId });
    res.status(200).json(debts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get debts by phone agent
const getDebtsByPhoneAgent = async (req, res) => {
  try {
    const phoneAgentId = req.params.phoneAgentId;
    const debts = await Debt.find({ phoneAgentId });
    res.status(200).json(debts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get debts by sales agent
const getDebtsBySalesAgent = async (req, res) => {
  try {
    const salesAgentId = req.params.salesAgentId;
    const debts = await Debt.find({ salesAgentId });
    res.status(200).json(debts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//mark a debt as paid
const markDebtAsPaid = async (req, res) => {
  try {
    const debtId = req.params.debtId;
    const updatedDebt = await Debt.findByIdAndUpdate(
      debtId,
      { paid: true },
      { new: true }
    );
    if (!updatedDebt) {
      return res.status(404).json({ error: "Debt not found" });
    }
    res.status(200).json(updatedDebt);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createDebt,
  getDebt,
  updateDebtPaymentDate,
  updateDebtAmount,
  updateDebtMonthlyPayment,
  deleteDebt,
  getAllDebts,
  getDebtsByClient,
  getDebtsByPhoneAgent,
  getDebtsBySalesAgent,
  markDebtAsPaid,
};
