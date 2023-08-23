const Joi = require("joi");

const stringPropertiesArray = ["name", "email", "phone"];
const booleanPropertiesArray = ["favorite"];

const createAddSchemaObject = () => {
  const object = {};

  for (const property of stringPropertiesArray) {
    object[property] = Joi.string()
      .required()
      .messages({
        "any.required": `Missing required ${property} field`,
      });
  }

  for (const property of booleanPropertiesArray) {
    object[property] = Joi.boolean()
      .required()
      .messages({
        "any.required": `Missing required ${property} field`,
      });
  }

  return object;
};

const addSchema = Joi.object(createAddSchemaObject());

const upDateFavoriteSchema = Joi.object({
  [booleanPropertiesArray[0]]: Joi.boolean()
    .required()
    .messages({
      "any.required": `Missing required ${booleanPropertiesArray[0]} field`,
    }),
});

module.exports = { addSchema, upDateFavoriteSchema };
