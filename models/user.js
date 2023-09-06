const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { mongooseError } = require("../helpers");

const schemaOption = { versionKey: false, timestamps: true };

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
    avatarURL: String,
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  schemaOption
);

userSchema.post("save", mongooseError);

const User = model("user", userSchema);

const regLogSchema = Joi.object({
  password: Joi.string().required().messages({
    "any.required": `Missing required password field`,
  }),
  email: Joi.string().required().messages({
    "any.required": `Missing required email field`,
  }),
});

const emailSchema = Joi.object({
  email: Joi.string().required().messages({
    "any.required": `Missing required field email`,
  }),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().required().messages({
    "any.required": `Missing required subscription field`,
  }),
});

module.exports = { User, regLogSchema, emailSchema, updateSubscriptionSchema };
