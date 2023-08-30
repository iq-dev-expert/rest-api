const express = require("express");
const { validateData } = require("../../middlewares");
const { regLogSchema } = require("../../models/user");
const { register } = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateData(regLogSchema), register);

module.exports = router;
