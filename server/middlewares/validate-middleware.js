const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 420;
    const message = "Fill The Inputs Properly"
    const extraDetails = err.errors[0].message;

    const error = {
      status,
      message,
      extraDetails,
    };

    next(error);
    // res.status(400).json({ msg: message });
  }
};

module.exports = validate;
