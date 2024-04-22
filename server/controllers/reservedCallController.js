import ReservedCall from '../server/models/reservedCalls';

//create a new reserved call
const createReservedCall = async (req, res) => {
  try {
    const { agentId, outcome, date, referenceId, comments, reservationDate } = req.body;
    const newReservedCall = new ReservedCall({
      agentId,
      outcome,
      date,
      referenceId,
      comments,
      reservationDate,
    });
    const savedReservedCall = await newReservedCall.save();
    res.status(201).json(savedReservedCall);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get a reserved call by ID
const getReservedCall = async (req, res) => {
  try {
    const reservedCallId = req.params.reservedCallId;
    const reservedCall = await ReservedCall.findById(reservedCallId);
    if (!reservedCall) {
      return res.status(404).json({ error: 'Reserved call not found' });
    }
    res.status(200).json(reservedCall);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a reserved call's outcome
const updateReservedCallOutcome = async (req, res) => {
  try {
    const reservedCallId = req.params.reservedCallId;
    const { outcome } = req.body;
    const updatedReservedCall = await ReservedCall.findByIdAndUpdate(
      reservedCallId,
      { outcome },
      { new: true }
    );
    if (!updatedReservedCall) {
      return res.status(404).json({ error: 'Reserved call not found' });
    }
    res.status(200).json(updatedReservedCall);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update phone agent to the reserved call
const updateReservedCallAgent = async (req, res) => {
  try {
    const reservedCallId = req.params.reservedCallId;
    const { agentId } = req.body;
    const updatedReservedCall = await ReservedCall.findByIdAndUpdate(
      reservedCallId,
      { agentId },
      { new: true }
    );
    if (!updatedReservedCall) {
      return res.status(404).json({ error: 'Reserved call not found' });
    }
    res.status(200).json(updatedReservedCall);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a reserved call's date
const updateReservedCallDate = async (req, res) => {
  try {
    const reservedCallId = req.params.reservedCallId;
    const { date } = req.body;
    const updatedReservedCall = await ReservedCall.findByIdAndUpdate(
      reservedCallId,
      { date },
      { new: true }
    );
    if (!updatedReservedCall) {
      return res.status(404).json({ error: 'Reserved call not found' });
    }
    res.status(200).json(updatedReservedCall);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a reserved call's comments
const updateReservedCallComments = async (req, res) => {
  try {
    const reservedCallId = req.params.reservedCallId;
    const { body } = req.body;
    const updatedReservedCall = await ReservedCall.findByIdAndUpdate(
      reservedCallId,
      { $push: { comments: { body, date: new Date() } } },
      { new: true }
    );
    if (!updatedReservedCall) {
      return res.status(404).json({ error: 'Reserved call not found' });
    }
    res.status(200).json(updatedReservedCall);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a reserved call's reservation date
const updateReservedCallReservationDate = async (req, res) => {
  try {
    const reservedCallId = req.params.reservedCallId;
    const { reservationDate } = req.body;
    const updatedReservedCall = await ReservedCall.findByIdAndUpdate(
      reservedCallId,
      { reservationDate },
      { new: true }
    );
    if (!updatedReservedCall) {
      return res.status(404).json({ error: 'Reserved call not found' });
    }
    res.status(200).json(updatedReservedCall);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//delete a reserved call
const deleteReservedCall = async (req, res) => {
  try {
    const reservedCallId = req.params.reservedCallId;
    const deletedReservedCall = await ReservedCall.findByIdAndDelete(reservedCallId);
    if (!deletedReservedCall) {
      return res.status(404).json({ error: 'Reserved call not found' });
    }
    res.status(200).json({ message: 'Reserved call deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get all reserved calls
const getAllReservedCalls = async (req, res) => {
  try {
    const reservedCalls = await ReservedCall.find();
    res.status(200).json(reservedCalls);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get reserved calls by agent
const getReservedCallsByAgent = async (req, res) => {
  try {
    const agentId = req.params.agentId;
    const reservedCalls = await ReservedCall.find({ agentId });
    res.status(200).json(reservedCalls);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get reserved calls by reference
const getReservedCallsByReference = async (req, res) => {
  try {
    const referenceId = req.params.referenceId;
    const reservedCalls = await ReservedCall.find({ referenceId });
    res.status(200).json(reservedCalls);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//add comment to a reserved call
const addComment = async (req, res) => {
  try {
    const reservedCallId = req.params.reservedCallId;
    const { body } = req.body;
    const updatedReservedCall = await ReservedCall.findByIdAndUpdate(
      reservedCallId,
      { $push: { comments: { body, date: new Date() } } },
      { new: true }
    );
    if (!updatedReservedCall) {
      return res.status(404).json({ error: 'Reserved call not found' });
    }
    res.status(200).json(updatedReservedCall);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createReservedCall,
  getReservedCall,
  updateReservedCallOutcome,
  updateReservedCallDate,
  updateReservedCallComments,
  updateReservedCallReservationDate,
  deleteReservedCall,
  getAllReservedCalls,
  getReservedCallsByAgent,
  getReservedCallsByReference,
  addComment,
};