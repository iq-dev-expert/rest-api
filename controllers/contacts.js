const { Contact } = require("../models/contact");
const {
  controllersWrapper,
  PageNotFound,
  responseWrapper,
} = require("../helpers");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const { favorite = "" } = req.query;

  const result = await Contact.find(
    { owner, favorite },
    "-createdAt -updatedAt -owner",
    {
      skip,
      limit,
    }
  );
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id, "-createdAt -updatedAt -owner");
  PageNotFound(result);
  res.json(result);
};

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(responseWrapper(result));
};

const update = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  PageNotFound(result);
  res.json(responseWrapper(result));
};

const updateFavorit = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  PageNotFound(result);
  res.json(responseWrapper(result));
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
