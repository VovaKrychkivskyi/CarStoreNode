const {
  userService: {
    checkUserService,
    createUserService,
    updateUserService
  }
} = require(`../services`)

module.exports = {
  createUser: async (req, res) => {
    const user = await createUserService(req.body)
    res.json(user)
  },

  readUser: async (req, res) => {
    const user = await checkUserService(req.body)
    res.json(user)
  },

  updateUser: async (req, res)=>{
    const user = await updateUserService(req.body.name, req.body.email)
    res.json(user)
  }
}