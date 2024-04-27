const express = require("express");
const router = express();
const loginController = require("../controllers/userProxy");
const bodyParser = require("body-parser");

router.use(bodyParser.json()); //this is to be able to parse req.body

router.post("/signUp", loginController.createUser);

module.exports = router;
