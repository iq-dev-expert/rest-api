const validateData = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (!Object.keys(req.body).length) {
      return res.status(400).json({ error: "Missing fields" });
    }

    if (error) {
      const missingNameField = error.details[0].context.label;
      return res
        .status(400)
        .json({ error: `Missing required ${missingNameField} field` });
    }

    next();
  };
};

module.exports = validateData;
