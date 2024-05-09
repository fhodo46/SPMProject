const express = require("express");
const router = express();
const scheduleController = require("../controllers/scheduleController");
login_controller = require("../controllers/userProxy");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

//create a new schedule
router.post("/create", (req, res) => {
  login_controller.authorize(req, res, () => {
    scheduleController.createSchedule(req, res);
  });
});

//get a schedule by ID
router.get("/:scheduleId", (req, res) => {
  login_controller.authorize(req, res, () => {
    scheduleController.getSchedule(req, res);
  });
});

//update a schedule
router.put("/update/:scheduleId", (req, res) => {
  login_controller.authorize(req, res, () => {
    scheduleController.updateSchedule(req, res);
  });
});

//delete a schedule
router.delete("/delete/:scheduleId", (req, res) => {
  login_controller.authorize(req, res, () => {
    scheduleController.deleteSchedule(req, res);
  });
});

//get all schedules
router.get("/all", (req, res) => {
  login_controller.authorize(req, res, () => {
    scheduleController.getAllSchedules(req, res);
  });
});

//get schedules by sales agent
router.get("/agent/:salesAgentId", (req, res) => {
  login_controller.authorize(req, res, () => {
    scheduleController.getSchedulesBySalesAgent(req, res);
  });
});

//mark schedule as had meeting
router.put("/:scheduleId/hadMeeting", (req, res) => {
  login_controller.authorize(req, res, () => {
    scheduleController.markScheduleAsHadMeeting(req, res);
  });
});

//mark schedule as no meeting
router.put("/:scheduleId/noMeeting", (req, res) => {
  login_controller.authorize(req, res, () => {
    scheduleController.markScheduleAsNoMeeting(req, res);
  });
});

module.exports = router;
