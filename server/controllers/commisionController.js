const Commission = require("../models/commisions");
const Sales = require("../models/sales");
const { getSalesAgentSales2 } = require("./salesController");

//create a new commission for the sales agent
const createSalesAgentCommission = async (Sales, res) => {
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
    let amount = 0;
    if (upfrontPayment >= 295) {
      amount = 20;
    } else if (upfrontPayment >= 200) {
      amount = 15;
    } else if (upfrontPayment >= 100) {
      amount = 10;
    } else if (upfrontPayment >= 50) {
      amount = 5;
    } else {
      amount = 0;
    }

    if (upfrontPayment > 0 && numOfReferences >= 10) {
      amount += 5;
    }
    //commission for the sales agent
    const newCommission = new Commission({
      salesAgentId,
      amount,
      approved: false, //set default approval status to false
    });
    const savedCommission = await newCommission.save();
    res.status(201).json(savedCommission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//5 euro comission for travelling fees
const create5euroCommision = async (salesAgentId, res) => {
  const amount = 5;
  try {
    const newCommission = new Commission({
      salesAgentId,
      amount,
      approved: false, //set default approval status to false
    });
    const savedCommission = await newCommission.save();
    res.status(201).json(savedCommission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//create a new comission for the phone agent
const createPhoneAgentCommission = async (Sales, res) => {
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
    let amount = 0;
    if (upfrontPayment > 50) {
      amount = 6.5;
    } else {
      amount = 1.5;
    }
    //commission for the phone agent
    const newCommission = new Commission({
      phoneAgentId,
      amount,
      approved: false, // Set default approval status to false
    });
    const savedCommission = await newCommission.save();
    res.status(201).json(savedCommission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//calculate the monthly comission for a sales agent
const calculateMonthlyComission = async (salesAgentId, res) => {
  try {
    const numOfSales = await getSalesAgentSales2(salesAgentId);
    let amount = 0;
    if (numOfSales >= 7) {
      amount = numOfSales * 160;
    } else if (numOfSales >= 5) {
      amount = numOfSales * 150;
    } else if (numOfSales >= 3) {
      amount = numOfSales * 140;
    }

    const newCommission = new Commission({
      salesAgentId: salesAgentId,
      amount: amount,
      approved: false, // Set default approval status to false
    });
    const savedCommission = await newCommission.save();
    res.status(201).json(savedCommission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get a commission by ID
const getCommission = async (req, res) => {
  try {
    const commissionId = req.params.commissionId;
    const commission = await Commission.findById(commissionId);
    if (!commission) {
      return res.status(404).json({ error: "Commission not found" });
    }
    res.status(200).json(commission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a commission's amount
const updateCommissionAmount = async (req, res) => {
  try {
    const commissionId = req.params.commissionId;
    const { amount } = req.body;
    const updatedCommission = await Commission.findByIdAndUpdate(
      commissionId,
      { amount },
      { new: true }
    );
    if (!updatedCommission) {
      return res.status(404).json({ error: "Commission not found" });
    }
    res.status(200).json(updatedCommission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//delete a commission
const deleteCommission = async (req, res) => {
  try {
    const commissionId = req.params.commissionId;
    const deletedCommission = await Commission.findByIdAndDelete(commissionId);
    if (!deletedCommission) {
      return res.status(404).json({ error: "Commission not found" });
    }
    res.status(200).json({ message: "Commission deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get all commissions
const getAllCommissions = async (req, res) => {
  try {
    const commissions = await Commission.find();
    res.status(200).json(commissions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get approved commissions
const getApprovedCommissions = async (req, res) => {
  try {
    const approvedCommissions = await Commission.find({ approved: true });
    res.status(200).json(approvedCommissions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get pending commissions
const getPendingCommissions = async (req, res) => {
  try {
    const pendingCommissions = await Commission.find({ approved: false });
    res.status(200).json(pendingCommissions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//approve a commission
const approveCommission = async (req, res) => {
  try {
    const commissionId = req.params.commissionId;
    const updatedCommission = await Commission.findByIdAndUpdate(
      commissionId,
      { approved: true },
      { new: true }
    );
    if (!updatedCommission) {
      return res.status(404).json({ error: "Commission not found" });
    }
    res.status(200).json(updatedCommission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//reject a commission
const rejectCommission = async (req, res) => {
  try {
    const commissionId = req.params.commissionId;
    const updatedCommission = await Commission.findByIdAndUpdate(
      commissionId,
      { approved: false },
      { new: true }
    );
    if (!updatedCommission) {
      return res.status(404).json({ error: "Commission not found" });
    }
    res.status(200).json(updatedCommission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get commissions by agent
const getCommissionsByAgent = async (req, res) => {
  try {
    const agentId = req.params.agentId;
    const commissions = await Commission.find({ agentId });
    res.status(200).json(commissions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createSalesAgentCommission,
  createPhoneAgentCommission,
  create5euroCommision,
  getCommission,
  updateCommissionAmount,
  deleteCommission,
  getAllCommissions,
  getApprovedCommissions,
  getPendingCommissions,
  approveCommission,
  rejectCommission,
  getCommissionsByAgent,
  calculateMonthlyComission,
};
