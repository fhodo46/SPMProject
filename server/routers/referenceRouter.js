const express = require("express");
const router = express();
const referenceController = require("../controllers/referenceController");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

//add a new reference
router.post("/add", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.addReference(req, res);
  });
});

//get references for a sales agent
router.get("/salesAgent/:salesAgentId", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.getSalesAgentReferences(req, res);
  });
});

//get refrence of the logged in sales agent
router.get("/myRefrence", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.getMySalesAgentReferences(req, res);
  });
});

//get qualified references
router.get("/qualified", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.getQualifiedReferences(req, res);
  });
});

//get uncalled references
router.get("/uncalled", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.getUncalledReferences(req, res);
  });
});

//get a reference by ID
router.get("/get-reference/:referenceId", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.getReferenceById(req, res);
  });
});

//update a reference's name
router.put("/updateName/:referenceId", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.updateReferenceName(req, res);
  });
});

//update a reference's address
router.put("/address/:referenceId", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.updateReferenceAddress(req, res);
  });
});

//update a reference's profession
router.put("/profession/:referenceId", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.updateReferenceProfession(req, res);
  });
});

//update a reference's sales agent ID
router.put("/salesAgentId/:referenceId", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.updateReferenceSalesAgentId(req, res);
  });
});

//delete a reference
router.delete("/delete/:referenceId", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.deleteReference(req, res);
  });
});

//get all references
router.get("/all", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.getAllReferences(req, res);
  });
});

//mark a reference as qualified
router.put("/:referenceId/qualified", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.markReferenceAsQualified(req, res);
  });
});

//mark a reference as unqualified
router.put("/:referenceId/unqualified", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.markReferenceAsUnqualified(req, res);
  });
});

//mark a reference as called
router.put("/:referenceId/called", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.markReferenceAsCalled(req, res);
  });
});

//mark a reference as uncalled
router.put("/:referenceId/uncalled", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.markReferenceAsUncalled(req, res);
  });
});

//add a comment to a reference
router.put("/:referenceId/addComment", (req, res) => {
  login_controller.authorize(req, res, () => {
    referenceController.addCommentToReference(req, res);
  });
});

module.exports = router;
