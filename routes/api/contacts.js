const express = require("express");
const {
  getAll,
  getById,
  add,
  update,
  // remove,
} = require("../../controllers/contacts");
const { validateData, isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/", getAll);

router.get("/:id", isValidId, getById);

router.post("/", validateData, add);

router.put("/:id", isValidId, validateData, update);

router.patch("/:id/favorite", isValidId);

// router.delete("/:id",isValidId, remove);

module.exports = router;
