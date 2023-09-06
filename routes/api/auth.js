const express = require("express");

const { validateData, authenticate, upload } = require("../../middlewares");
const {
  regLogSchema,
  emailSchema,
  updateSubscriptionSchema,
} = require("../../models/user");
const {
  register,
  verifyEmail,
  resendVerifyEmail,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
} = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateData(regLogSchema), register);

router.get("/verify/:verificationToken", verifyEmail);

router.post("/verify", validateData(emailSchema), resendVerifyEmail);

router.post("/login", validateData(regLogSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch(
  "/",
  authenticate,
  validateData(updateSubscriptionSchema),
  updateSubscription
);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
