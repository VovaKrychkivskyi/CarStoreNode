const {comparePass} = require(`../utils`)
module.exports = {
  logInUser: async (req, res, next) => {
    try {
      const user = req.user
      const {password} = req.body

      await comparePass(password, user.password)

    } catch (e) {
      next(e)
    }
  }
}