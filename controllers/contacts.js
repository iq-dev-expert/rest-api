const {
  getContactList,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../models/contacts");
const { HttpError, controllersWrapper, validateData } = require("../helpers");

const getAll = async (_, res) => {
  const result = await getContactList();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await getContactById(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const add = async (req, res) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};

const update = async (req, res) => {
  const { id } = req.params;
  const result = await updateContact(id, req.body);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const result = await removeContact(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({ message: "Contact deleted" });
};

module.exports = {
  getAll: controllersWrapper(getAll),
  getById: controllersWrapper(getById),
  add: [validateData, controllersWrapper(add)],
  update: [validateData, controllersWrapper(update)],
  remove: controllersWrapper(remove),
};
