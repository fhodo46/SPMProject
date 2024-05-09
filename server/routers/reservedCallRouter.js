const express = require("express");
const router = express();
const reservedCallController = require('../controllers/reservedCallController');

router.use(bodyParser.json());

//create a new reserved call
router.post('/reservedCalls', reservedCallController.createReservedCall);

//get a reserved call by ID
router.get('/reservedCalls/:reservedCallId', reservedCallController.getReservedCall);

//update a reserved call's outcome
router.put('/reservedCalls/:reservedCallId/outcome', reservedCallController.updateReservedCallOutcome);

//update a reserved call's agent
router.put('/reservedCalls/:reservedCallId/agent', reservedCallController.updateReservedCallAgent);

//update a reserved call's date
router.put('/reservedCalls/:reservedCallId/date', reservedCallController.updateReservedCallDate);

//update a reserved call's comments
router.put('/reservedCalls/:reservedCallId/comments', reservedCallController.updateReservedCallComments);

//update a reserved call's reservation date
router.put('/reservedCalls/:reservedCallId/reservationDate', reservedCallController.updateReservedCallReservationDate);

//delete a reserved call
router.delete('/reservedCalls/:reservedCallId', reservedCallController.deleteReservedCall);

//get all reserved calls
router.get('/reservedCalls', reservedCallController.getAllReservedCalls);

//get reserved calls by agent
router.get('/reservedCalls/agent/:agentId', reservedCallController.getReservedCallsByAgent);

//get reserved calls by reference
router.get('/reservedCalls/reference/:referenceId', reservedCallController.getReservedCallsByReference);

//add a comment to a reserved call
router.put('/reservedCalls/:reservedCallId/addComment', reservedCallController.addComment);

module.exports = router;