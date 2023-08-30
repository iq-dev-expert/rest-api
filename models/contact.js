const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { mongooseError } = require("../helpers");

const schemaOption = { versionKey: false };

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  schemaOption
);

contactSchema.post("save", mongooseError);

const Contact = model("contact", contactSchema);

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
    object[property] = Joi.boolean();
  }

  return object;
};

const addSchema = Joi.object(createAddSchemaObject());

const updateFavoriteSchema = Joi.object({
  [booleanPropertiesArray[0]]: Joi.boolean()
    .required()
    .messages({
      "any.required": `Missing required ${booleanPropertiesArray[0]} field`,
    }),
});

module.exports = { Contact, addSchema, updateFavoriteSchema };
