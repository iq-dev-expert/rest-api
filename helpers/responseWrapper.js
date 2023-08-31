const responseWrapper = (result) => {
  const { name, email, phone, favorite, _id } = result;
  return { name, email, phone, favorite, _id };
};

module.exports = responseWrapper;
