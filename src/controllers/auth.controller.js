const {comparePass, createTokens} = require(`../utils`)
const {
  authService: {
    saveTokenService
  }
} = require(`../services`);

module.exports = {
  logInUser: async (req, res, next) => {
    try {
      const user = req.user
      const {password} = req.body

      await comparePass(password, user.password)

      const token = await createTokens()
      await saveTokenService({...token, user_id: user.id})

      res.json(token)

    } catch (e) {
      next(e)
    }
  }
}