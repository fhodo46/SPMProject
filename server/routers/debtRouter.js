const express = require("express");
const router = express();
const debtController = require('../controllers/debtController');

router.use(bodyParser.json());

//create a debt
router.post('/debts', debtController.createDebtFRONT);

//get a debt by ID
router.get('/debts/:debtId', debtController.getDebt);

//update a debt's payment date
router.put('/debts/:debtId/paymentDate', debtController.updateDebtPaymentDate);

//update a debt's amount
router.put('/debts/:debtId/amount', debtController.updateDebtAmount);

//update a debt's monthly payment
router.put('/debts/:debtId/monthlyPayment', debtController.updateDebtMonthlyPayment);

//delete a debt
router.delete('/debts/:debtId', debtController.deleteDebt);

//get all debts
router.get('/debts', debtController.getAllDebts);

//get debts by client
router.get('/debts/client/:clientId', debtController.getDebtsByClient);

//get debts by phone agent
router.get('/debts/phoneAgent/:phoneAgentId', debtController.getDebtsByPhoneAgent);

//get debts by sales agent
router.get('/debts/salesAgent/:salesAgentId', debtController.getDebtsBySalesAgent);

//mark a debt as paid
router.put('/debts/:debtId/paid', debtController.markDebtAsPaid);

module.exports = router;