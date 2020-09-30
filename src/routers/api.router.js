const {Router} = require(`express`);

const {userRouter} = require(`./`);

const apiRouter = Router();

apiRouter.use(`/users`, userRouter);


module.exports = apiRouter;