import Meeting from '../server/models/meeting';
import {createReference2} from '../controllers2/referenceController';

//create new meeting
const createMeeting = async (req, res) => {
  try {
    const { salesAgentId, phoneAgentId, buyerId, startTime, endTime, outcome, type, reference } = req.body;
    const newMeeting = new Meeting({
      salesAgentId,
      phoneAgentId,
      buyerId,
      startTime,
      endTime,
      outcome,
      type,
      reference,
    });
    //add all the references to the database
    if (reference != null){
      for (reference in reference){
        createReference2(reference);
      }
    }
    //add meeting to db
    const savedMeeting = await newMeeting.save();
    res.status(201).json(savedMeeting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get all meetings of a sales agent
const getSalesAgentMeetings = async (req, res) => {
  try {
    const salesAgentId = req.params.salesAgentId;
    const meetings = await Meeting.find({ salesAgentId });
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
    const updatedMeeting = await Meeting.findByIdAndUpdate(
      meetingId,
      { outcome },
      { new: true }
    );
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
      const updatedMeeting = await Meeting.findByIdAndUpdate(
        meetingId,
        { salesAgentId },
        { new: true }
      );
      res.status(200).json(updatedMeeting);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

//change the time slot of the meeting
const editMeetingTimeSlot = async (req, res) => {
    try {
      const meetingId = req.params.meetingId;
      const { startTime,endTime } = req.body;
      const updatedMeeting = await Meeting.findByIdAndUpdate(
        meetingId,
        { startTime, endTime },
        { new: true }
      );
      res.status(200).json(updatedMeeting);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

//get meetings within a time period
const getMeetingsByTimePeriod = async (req, res) => {
    try {
      const { startTime, endTime } = req.query;
      const meetings = await Meeting.find({
        startTime: { $gte: new Date(startTime) },
        endTime: { $lte: new Date(endTime) },
      });
      res.status(200).json(meetings);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  //get meetings by outcome
  const getMeetingsByOutcome = async (req, res) => {
    try {
      const { outcome } = req.query;
      const meetings = await Meeting.find({ outcome:outcome });
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
  };
