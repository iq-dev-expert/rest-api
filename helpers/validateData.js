const validateData = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (!Object.keys(req.body).length) {
      return res.status(400).json({ error: "Missing fields" });
    }

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    next();
  };
};

module.exports = validateData;
