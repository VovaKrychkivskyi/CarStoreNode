const express = require(`express`);
const app = express();

const {mainRouter} = require(`./routers`)

app.use(express.json());

app.use(`/`, mainRouter)

module.exports = app
