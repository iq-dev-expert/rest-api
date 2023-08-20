const HttpError = require("./HttpError");

const PageNotFound = (result) => {
  if (!result) {
    throw HttpError(404, "Not found");
  }
};

module.exports = PageNotFound;
