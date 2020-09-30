const {Router} = require(`express`);

const {
  usersControllers: {
    createUser,
    readUser,
    updateUser,
    deleteUser
  }
} = require(`../controllers`)

const userRouter = Router();

userRouter.get(`/`, readUser);
userRouter.post(`/`, createUser);
userRouter.patch(`/`, updateUser);
userRouter.delete(`/`, deleteUser);

module.exports = userRouter;