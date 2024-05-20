const Meeting = require("../models/meeting");
const { addReference2 } = require("../controllers/referenceController");

//create new meeting
const createMeeting = async (req, res) => {
  try {
    const {
      salesAgentId,
      phoneAgentId,
      buyerId,
      startTime,
      endTime,
      outcome,
      type,
      reference,
    } = req.body;
    const newMeeting = new Meeting({
      salesAgentId: salesAgentId,
      phoneAgentId: phoneAgentId,
      buyerId: buyerId,
      startTime: startTime,
      endTime: endTime,
      outcome: outcome,
      type: type,
      reference: reference,
    });
    if (reference.length) {
      for (const refrences of reference) {
        addReference2(refrences);
      }
    }
    const savedMeeting = await newMeeting.save();
    res.status(201).json(savedMeeting);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Failed to create meeting" });
  }
};

//get all meetings of a sales agent
const getSalesAgentMeetings = async (req, res) => {
  try {
    const salesAgentId = req.params.salesAgentId;
    const meetings = await Meeting.find({
      salesAgentId: salesAgentId,
    }).populate("buyerId");
    res.status(200).json(meetings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get all meetings of the logged in sales agent
const getMySalesAgentMeetings = async (req, res) => {
  try {
    const salesAgentId = req.params.salesAgentId;
    const meetings = await Meeting.find({
      salesAgentId: salesAgentId,
    }).populate("buyerId");
    res.status(200).json(meetings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//change the outcome of the meeting
const editMeetingOutcome = async (req, res) => {
  try {
    const meetingId = req.params.meetingId;
    const { outcome } = req.body;
    const updatedMeeting = await Meeting.findByIdAndUpdate(meetingId, {
      outcome: outcome,
    });
    res.status(200).json(updatedMeeting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//change the agent of the meeting
const editMeetingAgent = async (req, res) => {
  try {
    const meetingId = req.params.meetingId;
    const { salesAgentId } = req.body;
    const updatedMeeting = await Meeting.findByIdAndUpdate(meetingId, {
      salesAgentId: salesAgentId,
    });
    res.status(200).json(updatedMeeting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//change the time slot of the meeting
const editMeetingTimeSlot = async (req, res) => {
  try {
    const meetingId = req.params.meetingId;
    const { startTime, endTime } = req.body;
    const updatedMeeting = await Meeting.findByIdAndUpdate(meetingId, {
      startTime: startTime,
      endTime: endTime,
    });
    res.status(200).json(updatedMeeting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get meetings within a time period
const getMeetingsByTimePeriod = async (req, res) => {
  try {
    const { startTime, endTime } = req.body;
    const meetings = await Meeting.find({
      startTime: { $gte: new Date(startTime) },
      endTime: { $lte: new Date(endTime) },
    }).populate("buyerId");
    res.status(200).json(meetings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get meetings by outcome
const getMeetingsByOutcome = async (req, res) => {
  try {
    const { outcome } = req.body;
    const meetings = await Meeting.find({ outcome: outcome }).populate(
      "buyerId"
    );
    res.status(200).json(meetings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createMeeting,
  getSalesAgentMeetings,
  editMeetingOutcome,
  editMeetingAgent,
  editMeetingTimeSlot,
  getMeetingsByTimePeriod,
  getMeetingsByOutcome,
  getMySalesAgentMeetings,
};
