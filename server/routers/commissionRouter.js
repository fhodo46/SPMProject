const express = require("express");
const router = express();
const commissionController = require("../controllers/commisionController");
const login_controller = require("../controllers/userProxy");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

//create a commission for sales Agent
router.post("/salesAgentcreate", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.createSalesAgentCommission(req, res);
  });
});

router.post("/phoneAgentcreate", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.createPhoneAgentCommission(req, res);
  });
});

router.post("/5EuroCommission", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.create5euroCommision(req, res);
  });
});

router.post("/monthlyCommission", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.calculateMonthlyComission(req, res);
  });
});

//get a commission by ID
router.get("/retrieve/:commissionId", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.getCommission(req, res);
  });
});

//update a commission's amount
router.put("/:commissionId/amount", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.updateCommissionAmount;
  });
});

//delete a commission
router.delete("/delete/:commissionId", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.deleteCommission(req, res);
  });
});

//get all commissions
router.get("/retrieve", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.getAllCommissions;
  });
});

//get approved commissions
router.get("/approved", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.getApprovedCommissions(req, res);
  });
});

//get pending commissions
router.get("/pending", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.getPendingCommissions(req, res);
  });
});

//approve a commission
router.put("/:commissionId/approve", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.approveCommission(req, res);
  });
});

//reject a commission
router.put("/:commissionId/reject", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.rejectCommission(req, res);
  });
});

//get commissions by agent
router.get("/agent/:agentId", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.getCommissionsByAgent(req, res);
  });
});

//get commissions by logged in agent
router.get("/myAgent/:agentId", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.getMyCommissionsByAgent(req, res);
  });
});

module.exports = router;
