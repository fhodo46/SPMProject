const express = require("express");
const router = express();
const commissionController = require('../controllers/commisionController');

router.use(bodyParser.json());

//create a commission
router.post('/commissions', commissionController.createCommissionFRONT);

//get a commission by ID
router.get('/commissions/:commissionId', commissionController.getCommission);

//update a commission's amount
router.put('/commissions/:commissionId/amount', commissionController.updateCommissionAmount);

//delete a commission
router.delete('/commissions/:commissionId', commissionController.deleteCommission);

//get all commissions
router.get('/commissions', commissionController.getAllCommissions);

//get approved commissions
router.get('/commissions/approved', commissionController.getApprovedCommissions);

//get pending commissions
router.get('/commissions/pending', commissionController.getPendingCommissions);

//approve a commission
router.put('/commissions/:commissionId/approve', commissionController.approveCommission);

//reject a commission
router.put('/commissions/:commissionId/reject', commissionController.rejectCommission);

//get commissions by agent
router.get('/commissions/agent/:agentId', commissionController.getCommissionsByAgent);

module.exports = router;