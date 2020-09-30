const {Router} = require(`express`);

const {
  usersControllers: {
    createUser,
    readUser
  }
} = require(`../controllers`)

const userRouter = Router();

userRouter.get(`/`, readUser);
userRouter.post(`/`, createUser);

module.exports = userRouter;