const express = require("express");
const router = express();
const meetingController = require("../controllers/meetingController");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

//create a new meeting
router.post("/create", //(req, res) => {
  //login_controller.authorize(req, res, () => {
    meetingController.createMeeting//(req, res);
  //}
);
//});

//get all meetings of a sales agent
router.get(
  "/salesAgent/:salesAgentId",
  meetingController.getSalesAgentMeetings
);

//change the outcome of a meeting
router.put("/:meetingId/outcome", (req, res) => {
  login_controller.authorize(req, res, () => {
    meetingController.editMeetingOutcome(req, res);
  });
});

//change the agent of a meeting
router.put("/:meetingId/agent", (req, res) => {
  login_controller.authorize(req, res, () => {
    meetingController.editMeetingAgent(req, res);
  });
});

//change the time slot of a meeting
router.put("/:meetingId/timeslot", (req, res) => {
  login_controller.authorize(req, res, () => {
    meetingController.editMeetingTimeSlot(req, res);
  });
});

//cet meetings within a time period
router.get("/timeperiod", (req, res) => {
  login_controller.authorize(req, res, () => {
    meetingController.getMeetingsByTimePeriod(req, res);
  });
});

//get meetings by outcome
router.get("/getOutcome", (req, res) => {
  login_controller.authorize(req, res, () => {
    meetingController.getMeetingsByOutcome(req, res);
  });
});

module.exports = router;
