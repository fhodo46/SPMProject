const Reference = require("../models/reference");

//add reference (backend)
const addReference2 = async (Reference) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      address,
      profession,
      comments,
      qualified,
      salesAgentId,
      called,
    } = Reference;
    const newReference = new Reference({
      firstName,
      lastName,
      phoneNumber,
      address,
      profession,
      comments,
      qualified,
      salesAgentId,
      called,
    });
    const savedReference = await newReference.save();
    res.status(201).json(savedReference);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//add a new reference (frontend)
const addReference = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      address,
      profession,
      comments,
      qualified,
      salesAgentId,
      called,
    } = req.body;
    const newReference = new Reference({
      firstName,
      lastName,
      phoneNumber,
      address,
      profession,
      comments,
      qualified,
      salesAgentId,
      called,
    });
    const savedReference = await newReference.save();
    res.status(201).json(savedReference);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get references for a sales agent
const getSalesAgentReferences = async (req, res) => {
  try {
    const salesAgentId = req.params.salesAgentId;
    const references = await Reference.find({ salesAgentId });
    res.status(200).json(references);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get qualified references
const getQualifiedReferences = async (req, res) => {
  try {
    const qualifiedReferences = await Reference.find({ qualified: true });
    res.status(200).json(qualifiedReferences);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get uncalled references
const getUncalledReferences = async (req, res) => {
  try {
    const uncalledReferences = await Reference.find({ called: false });
    res.status(200).json(uncalledReferences);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get a reference by ID
const getReferenceById = async (req, res) => {
  try {
    const referenceId = req.params.referenceId;
    const reference = await Reference.findById(referenceId);
    if (!reference) {
      return res.status(404).json({ error: "Reference not found" });
    }
    res.status(200).json(reference);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a reference's name
const updateReferenceName = async (req, res) => {
  try {
    const referenceId = req.params.referenceId;
    const { firstName, lastName } = req.body;
    const updatedReference = await Reference.findByIdAndUpdate(
      referenceId,
      { firstName, lastName },
      { new: true }
    );
    if (!updatedReference) {
      return res.status(404).json({ error: "Reference not found" });
    }
    res.status(200).json(updatedReference);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a reference's address
const updateReferenceAddress = async (req, res) => {
  try {
    const referenceId = req.params.referenceId;
    const { address } = req.body;
    const updatedReference = await Reference.findByIdAndUpdate(
      referenceId,
      { address },
      { new: true }
    );
    if (!updatedReference) {
      return res.status(404).json({ error: "Reference not found" });
    }
    res.status(200).json(updatedReference);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a reference's profession
const updateReferenceProfession = async (req, res) => {
  try {
    const referenceId = req.params.referenceId;
    const { profession } = req.body;
    const updatedReference = await Reference.findByIdAndUpdate(
      referenceId,
      { profession },
      { new: true }
    );
    if (!updatedReference) {
      return res.status(404).json({ error: "Reference not found" });
    }
    res.status(200).json(updatedReference);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a reference's sales agent ID
const updateReferenceSalesAgentId = async (req, res) => {
  try {
    const referenceId = req.params.referenceId;
    const { salesAgentId } = req.body;
    const updatedReference = await Reference.findByIdAndUpdate(
      referenceId,
      { salesAgentId },
      { new: true }
    );
    if (!updatedReference) {
      return res.status(404).json({ error: "Reference not found" });
    }
    res.status(200).json(updatedReference);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//delete a reference
const deleteReference = async (req, res) => {
  try {
    const referenceId = req.params.referenceId;
    const deletedReference = await Reference.findByIdAndDelete(referenceId);
    if (!deletedReference) {
      return res.status(404).json({ error: "Reference not found" });
    }
    res.status(200).json({ message: "Reference deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get all references
const getAllReferences = async (req, res) => {
  try {
    const references = await Reference.find();
    res.status(200).json(references);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//mark a reference as qualified
const markReferenceAsQualified = async (req, res) => {
  try {
    const referenceId = req.params.referenceId;
    const updatedReference = await Reference.findByIdAndUpdate(
      referenceId,
      { qualified: true },
      { new: true }
    );
    if (!updatedReference) {
      return res.status(404).json({ error: "Reference not found" });
    }
    res.status(200).json(updatedReference);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//mark a reference as unqualified
const markReferenceAsUnqualified = async (req, res) => {
  try {
    const referenceId = req.params.referenceId;
    const updatedReference = await Reference.findByIdAndUpdate(
      referenceId,
      { qualified: false },
      { new: true }
    );
    if (!updatedReference) {
      return res.status(404).json({ error: "Reference not found" });
    }
    res.status(200).json(updatedReference);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//mark a reference as called
const markReferenceAsCalled = async (req, res) => {
  try {
    const referenceId = req.params.referenceId;
    const updatedReference = await Reference.findByIdAndUpdate(
      referenceId,
      { called: true },
      { new: true }
    );
    if (!updatedReference) {
      return res.status(404).json({ error: "Reference not found" });
    }
    res.status(200).json(updatedReference);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//mark a reference as uncalled
const markReferenceAsUncalled = async (req, res) => {
  try {
    const referenceId = req.params.referenceId;
    const updatedReference = await Reference.findByIdAndUpdate(
      referenceId,
      { called: false },
      { new: true }
    );
    if (!updatedReference) {
      return res.status(404).json({ error: "Reference not found" });
    }
    res.status(200).json(updatedReference);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//add comment to reference
const addCommentToReference = async (req, res) => {
  try {
    const referenceId = req.params.referenceId;
    const { body } = req.body;
    const updatedReference = await Reference.findByIdAndUpdate(
      referenceId,
      { $push: { comments: { body, date: new Date() } } },
      { new: true }
    );
    res.status(200).json(updatedReference);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
module.exports = {
  addReference,
  addReference2,
  getSalesAgentReferences,
  getQualifiedReferences,
  getUncalledReferences,
  getAllReferences,
  updateReferenceName,
  updateReferenceAddress,
  updateReferenceProfession,
  updateReferenceSalesAgentId,
  deleteReference,
  markReferenceAsCalled,
  markReferenceAsUncalled,
  markReferenceAsQualified,
  markReferenceAsUnqualified,
  addCommentToReference,
  getReferenceById,
};
