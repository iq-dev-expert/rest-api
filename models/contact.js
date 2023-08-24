const { Schema, model } = require("mongoose");
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

module.exports = Contact;
