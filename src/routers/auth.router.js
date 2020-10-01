const {Router} = require(`express`);
const {
  authsControllers: {
    logInUser
  }
} = require(`../controllers`);

const {
  userMiddlewares: {
    existUserDBTrue
  }
} = require(`../middlewares`);


const authRouter = Router();

authRouter.post(`/`, existUserDBTrue, logInUser);

module.exports = authRouter;