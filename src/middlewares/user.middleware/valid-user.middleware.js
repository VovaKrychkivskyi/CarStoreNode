const {errors, ErrorHandler, statusCodes} = require('../../errors')
const {joiValid} = require('../../utils')

module.exports = (req, res, next) => {
  try {
    const {error} = joiValid.validate(req.body);

    if (error) {
      return next(new ErrorHandler(
        statusCodes.BAD_REQUEST,
        errors.BAD_REQUEST_NOT_VALID_USER.message,
        errors.BAD_REQUEST_NOT_VALID_USER.code
      ))
    }

    next();

  } catch (e) {
    next(e)
  }
}