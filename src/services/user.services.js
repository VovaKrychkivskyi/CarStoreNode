const UserModel = require(`../database/models/user.model`)

module.exports = {
  createUserService: async (user) => {
    console.log(33);
    return await UserModel.create(user)
  },

  checkUserService:async (user)=>{
    return await UserModel.findOne({where:user})
  },

  updateUserService: async (name, email) =>{
    return await UserModel.update({name}, {where: {email}})
  },

  deleteUserService: async (email) =>{
    return await UserModel.destroy({where: {email}})
  }
}