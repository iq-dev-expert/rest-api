const validateData = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (!Object.keys(req.body).length) {
      return res.status(400).json({ error: "Missing fields" });
    }

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    next();
  };

  return func;
};

module.exports = validateData;
