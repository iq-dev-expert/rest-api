const express = require("express");
const {
  getAll,
  getById,
  add,
  update,
  updateFavorit,
  remove,
} = require("../../controllers/contacts");
const { validateData, isValidId, authenticate } = require("../../middlewares");
const { addSchema, updateFavoriteSchema } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, getAll);

router.get("/:id", authenticate, isValidId, getById);

router.post("/", authenticate, validateData(addSchema), add);

router.put("/:id", authenticate, isValidId, validateData(addSchema), update);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateData(updateFavoriteSchema),
  updateFavorit
);

router.delete("/:id", authenticate, isValidId, remove);

module.exports = router;
