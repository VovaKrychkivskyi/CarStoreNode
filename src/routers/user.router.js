const {Router} = require(`express`);

const {
  usersControllers: {
    createUser,
    readUser,
    updateUser
  }
} = require(`../controllers`)

const userRouter = Router();

userRouter.get(`/`, readUser);
userRouter.post(`/`, createUser);
userRouter.patch(`/`, updateUser);

module.exports = userRouter;