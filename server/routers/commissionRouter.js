const express = require("express");
const router = express();
const commissionController = require("../controllers/commisionController");
const login_controller = require("../controllers/userProxy");
const bodyParser = require("body-parser");


router.use(bodyParser.json());

//create a commission
router.post("/create", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.createCommissionFRONT(req, res);
  });
});

//get a commission by ID
router.get("/:commissionId", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.getCommission;
  });
});

//update a commission's amount
router.put("/:commissionId/amount", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.updateCommissionAmount;
  });
});

//delete a commission
router.delete("/:commissionId", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.deleteCommission;
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
    commissionController.getPendingCommissions;
  });
});

//approve a commission
router.put("/:commissionId/approve", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.approveCommission;
  });
});

//reject a commission
router.put("/:commissionId/reject", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.rejectCommission;
  });
});

//get commissions by agent
router.get("/agent/:agentId", (req, res) => {
  login_controller.authorize(req, res, () => {
    commissionController.getCommissionsByAgent;
  });
});

router.post('/sales_agent/create', (req, res)=>{
  login_controller.authorize(req, res, ()=>{
    commissionController.createSalesAgentCommission(req.body, res);
  })
})

module.exports = router;
