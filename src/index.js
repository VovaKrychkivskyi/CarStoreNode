const http = require(`http`)
const app = require(`./app`)
const sequelize = require(`./configs/sequalize.config`)

const server = http.createServer(app)

sequelize.sync()
  .then(() => {
    server.listen(4001, () => {
      console.log(`Server started on port 4001`)
    })
  })