const {Router} = require(`express`);
const {apiRouter} = require(`./`)
const mainRouter = Router();

mainRouter.use(`/api`, apiRouter);


module.exports = mainRouter;