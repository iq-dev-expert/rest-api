const {
  getContactList,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../models/contacts");
const Joi = require("joi");
const { HttpError, controllersWrapper } = require("../helpers");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

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
  const { error } = addSchema.validate(req.body);

  if (!Object.keys(req.body).length) {
    throw HttpError(400, "Missing fields");
  }

  if (error) {
    const missingNameField = error.details[0].context.label;
    throw HttpError(400, `Missing required ${missingNameField} field`);
  }

  const result = await addContact(req.body);
  res.status(201).json(result);
};

const update = async (req, res) => {
  const { error } = addSchema.validate(req.body);

  if (!Object.keys(req.body).length) {
    throw HttpError(400, "Missing fields");
  }

  if (error) {
    const missingNameField = error.details[0].context.label;
    throw HttpError(400, `Missing required ${missingNameField} field`);
  }

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
  add: controllersWrapper(add),
  update: controllersWrapper(update),
  remove: controllersWrapper(remove),
};
