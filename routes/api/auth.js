const express = require("express");
const { validateData } = require("../../middlewares");
const { regLogSchema } = require("../../models/user");
const { register, login } = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateData(regLogSchema), register);

router.post("/login", validateData(regLogSchema), login);

module.exports = router;
