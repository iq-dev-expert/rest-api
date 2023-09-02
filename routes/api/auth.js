const express = require("express");
const { validateData, authenticate } = require("../../middlewares");
const { regLogSchema, updateSubscriptionSchema } = require("../../models/user");
const {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
} = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateData(regLogSchema), register);

router.post("/login", validateData(regLogSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch(
  "/",
  authenticate,
  validateData(updateSubscriptionSchema),
  updateSubscription
);

module.exports = router;
