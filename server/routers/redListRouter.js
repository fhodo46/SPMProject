const express = require("express");
const router = express();
const redListController = require("../controllers/redListController");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

//create a new red list entry
router.post("/create", (req, res) => {
  login_controller.authorize(req, res, () => {
    redListController.createRedListEntry(req, res);
  });
});

//get a red list entry by ID
router.get("/getListEntry/:redListEntryId", (req, res) => {
  login_controller.authorize(req, res, () => {
    redListController.getRedListEntry(req, res);
  });
});

//update a red list entry's outcome
router.put("/:redListEntryId/outcome", (req, res) => {
  login_controller.authorize(req, res, () => {
    redListController.updateRedListOutcome(req, res);
  });
});

//update a red list entry's renewal date
router.put("/:redListEntryId/renewalDate", (req, res) => {
  login_controller.authorize(req, res, () => {
    redListController.updateRedListRenewalDate(req, res);
  });
});

//update a red list entry's comment
router.put("/:redListEntryId/comment", (req, res) => {
  login_controller.authorize(req, res, () => {
    redListController.updateRedListComment(req, res);
  });
});

//delete a red list entry
router.delete("/redlist/:redListEntryId", redListController.deleteRedListEntry);

//get all red list entries
router.get("/all", (req, res) => {
  login_controller.authorize(req, res, () => {
    redListController.getAllRedListEntries(req, res);
  });
});

//get red list entries by agent
router.get("agent/:agentId", (req, res) => {
  login_controller.authorize(req, res, () => {
    redListController.getRedListEntriesByAgent(req, res);
  });
});

//get red list entries by agent logged in
router.get("agent/:agentId", (req, res) => {
  login_controller.authorize(req, res, () => {
    redListController.getMyRedListEntriesByAgent(req, res);
  });
});

//get red list entries by reference
router.get("/reference/:referenceId", (req, res) => {
  login_controller.authorize(req, res, () => {
    redListController.getRedListEntriesByReference(req, res);
  });
});

//add a comment to a red list entry
router.put("/redlist/:redListEntryId/addComment", (req, res) => {
  login_controller.authorize(req, res, () => {
    redListController.addComment(req, res);
  });
});

module.exports = router;
