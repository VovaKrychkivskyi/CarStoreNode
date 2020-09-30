const {userService: {checkUserService}} = require(`../../services`);
const {ErrorHandler, errors, statusCodes} = require(`../../errors`)

module.exports = async (req, res, next) => {
  try {

    const user = await checkUserService(req.body)

    if (user) {
      return next(new ErrorHandler(
        statusCodes.BAD_REQUEST,
        errors.BAD_REQUEST_EMAIL_EXISTS.message,
        errors.BAD_REQUEST_EMAIL_EXISTS.code,
      ))
    }

    next()

  } catch (e) {
    next(e)
  }
}