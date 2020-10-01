const {
  userService: {
    checkUserService,
    createUserService,
    updateUserService,
    deleteUserService
  }
} = require(`../services`);

const {hashedPass} = require(`../utils`)

module.exports = {
  createUser: async (req, res, next) => {
    try {
      req.body.password = await hashedPass(req.body.password);
      const user = await createUserService(req.body)

      res.json(user)

    } catch (e) {
      next(e)
    }
  },

  readUser: async (req, res, next) => {
    try {

      res.json(req.user)

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