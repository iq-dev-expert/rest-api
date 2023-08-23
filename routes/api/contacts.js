const express = require("express");
const {
  getAll,
  getById,
  add,
  update,
  updateFavorit,
  remove,
} = require("../../controllers/contacts");
const { validateData, isValidId } = require("../../middlewares");
const { addSchema, updateFavoriteSchema } = require("../../helpers");

const router = express.Router();

router.get("/", getAll);

router.get("/:id", isValidId, getById);

router.post("/", validateData(addSchema), add);

router.put("/:id", isValidId, validateData(addSchema), update);

router.patch(
  "/:id/favorite",
  isValidId,
  validateData(updateFavoriteSchema),
  updateFavorit
);

router.delete("/:id", isValidId, remove);

module.exports = router;
