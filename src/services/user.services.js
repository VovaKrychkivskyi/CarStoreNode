const UserModel = require(`../database/models/user.model`)

module.exports = {
  createUserService: async (user) => {
    return await UserModel.create(user)
  },

  checkUserService:async (user)=>{
    return await UserModel.findOne(user)
  },

  updateUserService: async (name, email) =>{
    return await UserModel.update({name}, {where: {email}})
  }
}