const {Router} = require(`express`);

const {
  usersControllers: {
    createUser,
    readUser,
    updateUser,
    deleteUser
  }
} = require(`../controllers`);

const {
  userMiddlewares: {
    existUserDBFalse,
    existUserDBTrue
  }
} = require(`../middlewares`);

const userRouter = Router();

userRouter.get(`/`, existUserDBTrue, readUser);
userRouter.post(`/`, existUserDBFalse, createUser);
userRouter.patch(`/`, existUserDBTrue, updateUser);
userRouter.delete(`/`, existUserDBTrue, deleteUser);

module.exports = userRouter;