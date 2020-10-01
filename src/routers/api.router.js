const {Router} = require(`express`);

const {userRouter} = require(`./`);

const apiRouter = Router();

apiRouter.use(`/users`, userRouter);
apiRouter.use(`/auths`, );


module.exports = apiRouter;