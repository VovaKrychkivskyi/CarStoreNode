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
    existUserDBTrue,
    joiValidUser
  }
} = require(`../middlewares`);

const userRouter = Router();

userRouter.get(`/`, existUserDBTrue, readUser);
userRouter.post(`/`, existUserDBFalse, joiValidUser, createUser);
userRouter.patch(`/`, existUserDBTrue, joiValidUser, updateUser);
userRouter.delete(`/`, existUserDBTrue, deleteUser);

module.exports = userRouter;