

const response = async (statusCode, data, message, res) => {
  res.status(statusCode).send([
    {
      products: data,
      message,
      status: statusCode
    }
  ])
};

module.exports = response