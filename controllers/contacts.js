const Contact = require("../models/contact");
const { controllersWrapper, PageNotFound } = require("../helpers");

const getAll = async (_, res) => {
  const result = await Contact.find();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  res.json(result);
};

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const update = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  res.json(result);
};

const updateFavorit = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  res.json(result);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  PageNotFound(result);
  res.json({ message: "Contact deleted" });
};

module.exports = {
  getAll: controllersWrapper(getAll),
  getById: controllersWrapper(getById),
  add: controllersWrapper(add),
  update: controllersWrapper(update),
  updateFavorit: controllersWrapper(updateFavorit),
  remove: controllersWrapper(remove),
};
