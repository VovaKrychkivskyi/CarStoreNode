const {
  userService: {
    createUser: {
      createUserService
    }
  }
} = require(`../../services/`)

module.exports = {
  createUser: async (req, res) => {
    const user = await createUserService(req.body)
    res.json(user)

  }
}