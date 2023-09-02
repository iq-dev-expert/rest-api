const validateData = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (!Object.keys(req.body).length) {
      switch (error.details[0].context.key) {
        case "favorite":
        case "subscription": {
          return res.status(400).json({
            message: `missing field ${error.details[0].context.key}`,
          });
        }
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
