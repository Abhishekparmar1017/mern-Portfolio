const express = require("express");
const { sendEmailController } = require("../Controllers/PortfolioControllers");

// router object
const router = express.Router();

// roters
router.post("/sendEmail", sendEmailController);

// exort
module.exports = router;
