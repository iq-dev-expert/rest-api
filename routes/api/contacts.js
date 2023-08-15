const express = require("express");
const { getContactList } = require("../../models/contacts");

const router = express.Router();

router.get("/", async (_, res) => {
  res.json(await getContactList());
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "template message getById" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message post" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message delete" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message putById" });
});

module.exports = router;
