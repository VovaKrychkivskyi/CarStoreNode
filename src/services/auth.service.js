const AuthModel = require(`../database/models/auth.model`)

module.exports={
  saveTokenService: async (token) => {
    await AuthModel.create(token)
  }
}