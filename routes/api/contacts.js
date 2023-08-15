const express = require("express");
const {
  getAll,
  getById,
  add,
  update,
  remove,
} = require("../../controllers/contacts");

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", add);

router.put("/:id", update);

router.delete("/:id", remove);

module.exports = router;
