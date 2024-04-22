import RedListEntry from '../server/models/redList';
import ReservedCall from '../server/models/reservedCalls';

//create a red list entry
  const createRedListEntry = async(req, res)  =>{
    try {
      const { agentId, callId, outcome, renewalDate, referenceId, comments } = req.body;
      const newRedListEntry = new RedListEntry({
        agentId,
        callId,
        outcome,
        renewalDate,
        referenceId,
        comments,
      });
      const savedRedListEntry = await newRedListEntry.save();
      res.status(201).json(savedRedListEntry);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  //get a red list entry by ID
  const getRedListEntry = async(req, res) => {
    try {
      const redListEntryId = req.params.redListEntryId;
      const redListEntry = await RedListEntry.findById(redListEntryId);
      if (!redListEntry) {
        return res.status(404).json({ error: 'Red list entry not found' });
      }
      res.status(200).json(redListEntry);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  //update a red list outcome
  const updateRedListOutcome = async(req, res) => {
    try {
      const redListEntryId = req.params.redListEntryId;
      const { outcome } = req.body;
      const updatedRedListEntry = await RedListEntry.findByIdAndUpdate(
        redListEntryId,
        { outcome },
        { new: true }
      );
      if (!updatedRedListEntry) {
        return res.status(404).json({ error: 'Red list entry not found' });
      }
      res.status(200).json(updatedRedListEntry);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  //update a red list renewal date
  const updateRedListRenewalDate = async(req, res) => {
    try {
      const redListEntryId = req.params.redListEntryId;
      const { renewalDate } = req.body;
      const updatedRedListEntry = await RedListEntry.findByIdAndUpdate(
        redListEntryId,
        { renewalDate },
        { new: true }
      );
      if (!updatedRedListEntry) {
        return res.status(404).json({ error: 'Red list entry not found' });
      }
      res.status(200).json(updatedRedListEntry);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  //update a red list comment
  const updateRedListComment = async(req, res) => {
    try {
      const redListEntryId = req.params.redListEntryId;
      const { comments } = req.body;
      const updatedRedListEntry = await RedListEntry.findByIdAndUpdate(
        redListEntryId,
        { comments },
        { new: true }
      );
      if (!updatedRedListEntry) {
        return res.status(404).json({ error: 'Red list entry not found' });
      }
      res.status(200).json(updatedRedListEntry);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  //delete a red list entry
  const deleteRedListEntry = async(req, res) =>{
    try {
      const redListEntryId = req.params.redListEntryId;
      const deletedRedListEntry = await RedListEntry.findByIdAndDelete(redListEntryId);
      if (!deletedRedListEntry) {
        return res.status(404).json({ error: 'Red list entry not found' });
      }
      res.status(200).json({ message: 'Red list entry deleted successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Get all red list entries
  const getAllRedListEntries = async(req, res) =>{
    try {
      const redListEntries = await RedListEntry.find();
      res.status(200).json(redListEntries);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  //get red list entries by agent
  const getRedListEntriesByAgent = async(req, res) =>{
    try {
      const agentId = req.params.agentId;
      const redListEntries = await RedListEntry.find({ agentId });
      res.status(200).json(redListEntries);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  //get red list entries by reference
  const getRedListEntriesByReference = async(req, res) =>{
    try {
      const referenceId = req.params.referenceId;
      const redListEntries = await RedListEntry.find({ referenceId });
      res.status(200).json(redListEntries);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  //add a comment to a red list entry
  const addComment = async(req, res) =>{
    try {
      const redListEntryId = req.params.redListEntryId;
      const { body } = req.body;
      const updatedRedListEntry = await RedListEntry.findByIdAndUpdate(
        redListEntryId,
        { $push: { comments: { body, date: new Date() } } },
        { new: true }
      );
      if (!updatedRedListEntry) {
        return res.status(404).json({ error: 'Red list entry not found' });
      }
      res.status(200).json(updatedRedListEntry);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  //move a red list entry to reserved phone calls
  const moveRedListEntryToReservedCalls = async (redListEntryId, agentId, reservationDate) => {
    try {
      //find the red list entry you want to move to reserved calls
      const redListEntry = await RedList.findById(redListEntryId);
  
      if (!redListEntry) {
        throw new Error('Red list entry not found');
      }
  
      //create a new reserved call entry
      const newReservedCall = new ReservedCall({
        agentId,
        outcome: redListEntry.outcome,
        date: new Date(), //current date
        referenceId: redListEntry.referenceId,
        comments: redListEntry.comments || [],
        reservationDate,
      });
  
      //save the new reserved call entry
      const savedReservedCall = await newReservedCall.save();
  
      //remove the red list entry from the collection
      await RedList.findByIdAndRemove(redListEntryId);
  
      return savedReservedCall;
    } catch (err) {
      throw new Error(`Error moving red list entry to reserved calls: ${err.message}`);
    }
  };
module.exports = {
    createRedListEntry,
    getRedListEntry,
    getRedListEntriesByAgent,
    getRedListEntriesByReference,
    getAllRedListEntries,
    updateRedListComment,
    updateRedListOutcome,
    updateRedListRenewalDate,
    addComment,
    moveRedListEntryToReservedCalls,
    deleteRedListEntry
}