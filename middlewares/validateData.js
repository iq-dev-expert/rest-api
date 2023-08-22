const Joi = require("joi");
const { createObject } = require("../helpers");

const validate = (data) => {
  const schema = Joi.object(createObject());
  return schema.validate(data);
};

const validateData = (req, res, next) => {
  const { error } = validate(req.body);

  if (!Object.keys(req.body).length) {
    return res.status(400).json({ error: "Missing fields" });
  }

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
};

module.exports = validateData;
