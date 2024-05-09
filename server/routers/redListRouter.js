const express = require("express");
const router = express();
const redListController = require('../controllers/redListController');
const bodyParser = require("body-parser");


router.use(bodyParser.json());

//create a new red list entry
router.post('/redlist', redListController.createRedListEntry);

//get a red list entry by ID
router.get('/redlist/:redListEntryId', redListController.getRedListEntry);

//update a red list entry's outcome
router.put('/redlist/:redListEntryId/outcome', redListController.updateRedListOutcome);

//update a red list entry's renewal date
router.put('/redlist/:redListEntryId/renewalDate',redListController.updateRedListRenewalDate);

//update a red list entry's comment
router.put('/redlist/:redListEntryId/comment', redListController.updateRedListComment);

//delete a red list entry
router.delete('/redlist/:redListEntryId', redListController.deleteRedListEntry);

//get all red list entries
router.get('/redlist', redListController.getAllRedListEntries);

//get red list entries by agent
router.get('/redlist/agent/:agentId', redListController.getRedListEntriesByAgent);

//get red list entries by reference
router.get('/redlist/reference/:referenceId', redListController.getRedListEntriesByReference);

//add a comment to a red list entry
router.put('/redlist/:redListEntryId/addComment', redListController.addComment);

module.exports = router;