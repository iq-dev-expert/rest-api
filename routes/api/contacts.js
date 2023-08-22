const express = require("express");
const {
  getAll,
  getById,
  add,
  update,
  remove,
} = require("../../controllers/contacts");
const { validateData } = require("../../middlewares");

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", validateData, add);

router.put("/:id", validateData, update);

router.delete("/:id", remove);

module.exports = router;
