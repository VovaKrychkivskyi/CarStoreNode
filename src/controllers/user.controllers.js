const {
  userService: {
    checkUserService,
    createUserService
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
  }
}