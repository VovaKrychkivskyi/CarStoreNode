const {
  userService: {
    createUser: {
      createUserService
    }
  }
} = require(`../../services/`)

module.exports = {
  createUser: async (req, res) => {
    console.log(22);
    const user = await createUserService(req.body)
    res.json(user)

  }
}