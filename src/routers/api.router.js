const {Router} = require(`express`);

const {userRouter, authRouter} = require(`./`);

const apiRouter = Router();

apiRouter.use(`/users`, userRouter);
apiRouter.use(`/auths`, authRouter);


module.exports = apiRouter;