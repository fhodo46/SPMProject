const express = require("express");
const router = express();
const debtController = require("../controllers/debtController");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

//create a debt
router.post("/create", (req, res) => {
  login_controller.authorize(req, res, () => {
    debtController.createDebt(req, res);
  });
});

//get a debt by ID
router.get("/getById/:debtId", (req, res) => {
  login_controller.authorize(req, res, () => {
    debtController.getDebt(req, res);
  });
});

//update a debt's payment date
router.put("/:debtId/paymentDate", (req, res) => {
  login_controller.authorize(req, res, () => {
    debtController.updateDebtPaymentDate(req, res);
  });
});

//update a debt's amount
router.put("/:debtId/amount", (req, res) => {
  login_controller.authorize(req, res, () => {
    debtController.updateDebtAmount(req, res);
  });
});

//update a debt's monthly payment
router.put("/:debtId/monthlyPayment", (req, res) => {
  login_controller.authorize(req, res, () => {
    debtController.updateDebtMonthlyPayment(req, res);
  });
});

//delete a debt
router.delete("/delete/:debtId", (req, res) => {
  login_controller.authorize(req, res, () => {
    debtController.deleteDebt(req, res);
  });
});

//get all debts
router.get("/all", (req, res) => {
  login_controller.authorize(req, res, () => {
    debtController.getAllDebts(req, res);
  });
});

//get debts by client
router.get("/client/:clientId", (req, res) => {
  login_controller.authorize(req, res, () => {
    debtController.getDebtsByClient(req, res);
  });
});

//get debts by phone agent
router.get("/phoneAgent/:phoneAgentId", (req, res) => {
  login_controller.authorize(req, res, () => {
    debtController.getDebtsByPhoneAgent(req, res);
  });
});

//get debts by sales agent
router.get("/salesAgent/:salesAgentId", (req, res) => {
  login_controller.authorize(req, res, () => {
    debtController.getDebtsBySalesAgent(req, res);
  });
});

//mark a debt as paid
router.put("/:debtId/paid", (req, res) => {
  login_controller.authorize(req, res, () => {
    debtController.markDebtAsPaid(req, res);
  });
});

module.exports = router;
