const Joi = require("joi");

const stringPropertiesObject = ["name", "email", "phone"];

const createObject = () => {
  const object = {};

  for (const property of stringPropertiesObject) {
    object[property] = Joi.string()
      .required()
      .messages({
        "any.required": `Missing required ${property} field`,
      });
  }

  return object;
};

module.exports = createObject;
