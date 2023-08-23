const { addSchema } = require("../helpers");

const validate = (data) => {
  return addSchema.validate(data);
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

// const { HttpError } = require("../helpers");

// const validateBody = (schema) => {
//   const func = (req, res, next) => {
//     const { error } = schema.validate(req.body);
//     if (error) {
//       next(HttpError(400, error.message));
//     }
//     next();
//   };

//   return func;
// };

// module.exports = validateBody;
