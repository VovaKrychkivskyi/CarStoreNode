const {
  userService: {
    checkUserService,
    createUserService,
    updateUserService,
    deleteUserService
  }
} = require(`../services`)

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const user = await createUserService(req.body)
      res.json(user)

    } catch (e) {
      next(e)
    }
  },

  readUser: async (req, res, next) => {
    try {
      const user = await checkUserService(req.body)
      res.json(user)

    } catch (e) {
      next(e)
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const user = await updateUserService(req.body.name, req.body.email)
      res.json(user)

    } catch (e) {
      next(e)
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const user = await deleteUserService(req.body.email)
      res.json(user)

    } catch (e) {
      next(e)
    }
  }
}