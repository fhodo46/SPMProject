const express = require("express");
const router = express.Router();
const loginController = require("../controllers/userProxy");

router.post("/login", loginController.logIn);

module.exports = router;
