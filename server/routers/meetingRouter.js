const express = require("express");
const router = express();
const meetingController = require('../controllers/meetingController');

router.use(bodyParser.json());


//create a new meeting
router.post('/meetings', meetingController.createMeeting);

//get all meetings of a sales agent
router.get('/meetings/salesAgent/:salesAgentId', meetingController.getSalesAgentMeetings);

//change the outcome of a meeting
router.put('/meetings/:meetingId/outcome', meetingController.editMeetingOutcome);

//change the agent of a meeting
router.put('/meetings/:meetingId/agent', meetingController.editMeetingAgent);

//change the time slot of a meeting
router.put('/meetings/:meetingId/timeslot', meetingController.editMeetingTimeSlot);

//cet meetings within a time period
router.get('/meetings/timeperiod', meetingController.getMeetingsByTimePeriod);

//get meetings by outcome
router.get('/meetings/outcome', meetingController.getMeetingsByOutcome);

module.exports = router;