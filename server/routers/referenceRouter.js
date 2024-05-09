const express = require("express");
const router = express();
const referenceController = require("../controllers/referenceController");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

//add a new reference
router.post("/references", referenceController.addReference);

//get references for a sales agent
router.get(
  "/references/salesAgent/:salesAgentId",
  referenceController.getSalesAgentReferences
);

//get qualified references
router.get("/references/qualified", referenceController.getQualifiedReferences);

//get uncalled references
router.get("/references/uncalled", referenceController.getUncalledReferences);

//get a reference by ID
router.get("/references/:referenceId", referenceController.getReferenceById);

//update a reference's name
router.put(
  "/references/:referenceId/name",
  referenceController.updateReferenceName
);

//update a reference's address
router.put(
  "/references/:referenceId/address",
  referenceController.updateReferenceAddress
);

//update a reference's profession
router.put(
  "/references/:referenceId/profession",
  referenceController.updateReferenceProfession
);

//update a reference's sales agent ID
router.put(
  "/references/:referenceId/salesAgentId",
  referenceController.updateReferenceSalesAgentId
);

//delete a reference
router.delete("/references/:referenceId", referenceController.deleteReference);

//get all references
router.get("/references", referenceController.getAllReferences);

//mark a reference as qualified
router.put(
  "/references/:referenceId/qualified",
  referenceController.markReferenceAsQualified
);

//mark a reference as unqualified
router.put(
  "/references/:referenceId/unqualified",
  referenceController.markReferenceAsUnqualified
);

//mark a reference as called
router.put(
  "/references/:referenceId/called",
  referenceController.markReferenceAsCalled
);

//mark a reference as uncalled
router.put(
  "/references/:referenceId/uncalled",
  referenceController.markReferenceAsUncalled
);

//add a comment to a reference
router.put(
  "/references/:referenceId/comment",
  referenceController.addCommentToReference
);

module.exports = router;
