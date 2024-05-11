const Schedule = require("../models/Schedule");
const login_controller = require("../controllers/userProxy");

//create a new schedule
const createSchedule = async (req, res) => {
  try {
    const { startTime, endTime } = req.body;
    const salesAgentId = login_controller.get_id_from_token(req);
    const newSchedule = new Schedule({
      salesAgentId: salesAgentId,
      startTime: startTime,
      endTime: endTime,
    });
    const savedSchedule = await newSchedule.save();
    res.status(201).json(savedSchedule);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get schedule by ID
const getSchedule = async (req, res) => {
  try {
    const scheduleId = req.params.scheduleId;
    const schedule = await Schedule.findById(scheduleId);
    if (!schedule) {
      return res.status(404).json({ error: "Schedule not found" });
    }
    res.status(200).json(schedule);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update schedule
const updateSchedule = async (req, res) => {
  try {
    const scheduleId = req.params.scheduleId;
    const { startTime, endTime, status } = req.body;
    const updatedSchedule = await Schedule.findByIdAndUpdate(
      scheduleId,
      { startTime: startTime, endTime: endTime, status: status },
      { new: false }
    );
    if (!updatedSchedule) {
      return res.status(404).json({ error: "Schedule not found" });
    }
    res.status(200).json(updatedSchedule);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//delete a schedule
const deleteSchedule = async (req, res) => {
  try {
    const scheduleId = req.params.scheduleId;
    const deletedSchedule = await Schedule.findByIdAndDelete(scheduleId);
    if (!deletedSchedule) {
      return res.status(404).json({ error: "Schedule not found" });
    }
    res.status(200).json({ message: "Schedule deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get all schedules
const getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).json(schedules);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get schedules by sales agent
const getSchedulesBySalesAgent = async (req, res) => {
  try {
    const salesAgentId = login_controller.get_id_from_token(req);
    const schedules = await Schedule.find({ salesAgentId: salesAgentId });
    res.status(200).json(schedules);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//mark schedule as had-meeting
const markScheduleAsHadMeeting = async (req, res) => {
  try {
    const scheduleId = req.params.scheduleId;
    const updatedSchedule = await Schedule.findByIdAndUpdate(scheduleId, {
      status: "scheduled",
    });
    if (!updatedSchedule) {
      return res.status(404).json({ error: "Schedule not found" });
    }
    res.status(200).json(updatedSchedule);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//mark schedule as no-meeting
const markScheduleAsNoMeeting = async (req, res) => {
  try {
    const scheduleId = req.params.scheduleId;
    const updatedSchedule = await Schedule.findByIdAndUpdate(scheduleId, {
      status: "free",
    });
    if (!updatedSchedule) {
      return res.status(404).json({ error: "Schedule not found" });
    }
    res.status(200).json(updatedSchedule);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createSchedule,
  updateSchedule,
  getSchedule,
  getAllSchedules,
  getSchedulesBySalesAgent,
  deleteSchedule,
  markScheduleAsHadMeeting,
  markScheduleAsNoMeeting,
};
