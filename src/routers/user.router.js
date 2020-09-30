const {Router} = require(`express`);

const {
  usersControllers: {
    createController: {
      createUser
    }
  }
} = require(`../controllers`)

const userRouter = Router();

userRouter.post(`/`, createUser);

module.exports = userRouter;