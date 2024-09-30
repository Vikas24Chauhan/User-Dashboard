const errorMiddleware = (err, req, res, nest) => {
  const status = err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const extraDetails = err.extraDetails || "Error From BackEnd";

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
