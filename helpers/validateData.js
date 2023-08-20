const Joi = require("joi");

const propertiesObject = ["name", "email", "phone"];

const createObject = (propertiesObject) => {
  const object = {};

  for (const property of propertiesObject) {
    object[property] = Joi.string()
      .required()
      .messages({
        "any.required": `Missing required ${property} field`,
      });
  }

  return object;
};

const validate = (data) => {
  const schema = Joi.object(createObject(propertiesObject));
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
