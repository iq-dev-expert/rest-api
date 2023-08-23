const { isValidObjectId } = require("mongoose");
const { PageNotFound } = require("../helpers");

const isValidId = (req, _, next) => {
  const { id } = req.params;
  PageNotFound(isValidObjectId(id));
  next();
};

module.exports = isValidId;
