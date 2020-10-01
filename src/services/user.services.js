const UserModel = require(`../database/models/user.model`)

module.exports = {
  createUserService: async (user) => {
    return await UserModel.create(user)
  },

  checkUserService: async (email) => {
    return await UserModel.findOne({where: {email}})
  },

  updateUserService: async (name, email) => {
    return await UserModel.update({name}, {where: {email}})
  },

  deleteUserService: async (email) => {
    return await UserModel.destroy({where: {email}})
  }
}
