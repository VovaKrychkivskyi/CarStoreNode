const UserModel = require(`../../database/models/user.model`)
module.exports = {

  createUserService: async (user) => {
    return await UserModel.create(user)
  }
}