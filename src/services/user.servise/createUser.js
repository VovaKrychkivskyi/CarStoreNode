const UserModel = require(`../../database/models/user.model`)
module.exports = {

  createUserService: async (user) => {
    console.log(35);
    return await UserModel.create(user)
  }
}