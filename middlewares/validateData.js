const validateData = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (!Object.keys(req.body).length) {
      if (error.details[0].context.label === "favorite") {
        return res.status(400).json({
          message: `missing field ${error.details[0].context.label}`,
        });
      }

      return res.status(400).json({ message: "Missing fields" });
    }

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    next();
  };

  return func;
};

module.exports = validateData;
