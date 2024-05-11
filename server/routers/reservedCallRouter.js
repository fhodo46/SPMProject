const express = require("express");
const router = express();
const reservedCallController = require("../controllers/reservedCallController");
const login_controller = require("../controllers/userProxy");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

//create a new reserved call
router.post("/create", (req, res) => {
  login_controller.authorize(req, res, () => {
    reservedCallController.createReservedCall(req, res);
  });
});

//get a reserved call by ID
router.get("/fetch/:reservedCallId", (req, res) => {
  login_controller.authorize(req, res, () => {
    reservedCallController.getReservedCall(req, res);
  });
});

//update a reserved call's outcome
router.put("/:reservedCallId/outcome", (req, res) => {
  login_controller.authorize(req, res, () => {
    reservedCallController.updateReservedCallOutcome(req, res);
  });
});

//update a reserved call's agent
router.put("/:reservedCallId/agent", (req, res) => {
  login_controller.authorize(req, res, () => {
    reservedCallController.updateReservedCallAgent(req, res);
  });
});

//update a reserved call's date
router.put("/:reservedCallId/date", (req, res) => {
  login_controller.authorize(req, res, () => {
    reservedCallController.updateReservedCallDate(req, res);
  });
});

//update a reserved call's comments
router.put("/:reservedCallId/comments", (req, res) => {
  login_controller.authorize(req, res, () => {
    reservedCallController.updateReservedCallComments(req, res);
  });
});

//update a reserved call's reservation date
router.put("/:reservedCallId/reservationDate", (req, res) => {
  login_controller.authorize(req, res, () => {
    reservedCallController.updateReservedCallReservationDate(req, res);
  });
});

//delete a reserved call
router.delete("/delete/:reservedCallId", (req, res) => {
  login_controller.authorize(req, res, () => {
    reservedCallController.deleteReservedCall(req, res);
  });
});

//get all reserved calls
router.get("/all", (req, res) => {
  login_controller.authorize(req, res, () => {
    reservedCallController.getAllReservedCalls(req, res);
  });
});

//get reserved calls by agent
router.get("/agent/:agentId", (req, res) => {
  login_controller.authorize(req, res, () => {
    reservedCallController.getReservedCallsByAgent(req, res);
  });
});

//get reserved calls by reference
router.get("/reference/:referenceId", (req, res) => {
  login_controller.authorize(req, res, () => {
    reservedCallController.getReservedCallsByReference(req, res);
  });
});

//add a comment to a reserved call
router.put("/:reservedCallId/addComment", (req, res) => {
  login_controller.authorize(req, res, () => {
    reservedCallController.addComment(req, res);
  });
});

module.exports = router;
