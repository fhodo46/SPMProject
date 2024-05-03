const express = require("express");
const router = express();
const scheduleController = require('../controllers/scheduleController');

router.use(bodyParser.json());

//create a new schedule
router.post('/schedules', scheduleController.createSchedule);

//get a schedule by ID
router.get('/schedules/:scheduleId', scheduleController.getSchedule);

//update a schedule
router.put('/schedules/:scheduleId', scheduleController.updateSchedule);

//delete a schedule
router.delete('/schedules/:scheduleId', scheduleController.deleteSchedule);

//get all schedules
router.get('/schedules', scheduleController.getAllSchedules);

//get schedules by sales agent
router.get('/schedules/agent/:salesAgentId', scheduleController.getSchedulesBySalesAgent);

//mark schedule as had meeting
router.put('/schedules/:scheduleId/hadMeeting', scheduleController.markScheduleAsHadMeeting);

//mark schedule as no meeting
router.put('/schedules/:scheduleId/noMeeting', scheduleController.markScheduleAsNoMeeting);

module.exports = router;
