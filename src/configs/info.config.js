// That's info only mine, sorry'
////////////////////////////////////////////////////////////////////////////////////// MIGRATIONS
// set npm install --save-dev sequelize-cli
// create  .sequelizerc file
// (fix it)
// set npx sequelize-cli init
// (fix database.config.js)
// set npx sequelize-cli migration:generate --name NAME
// (fix new NAME js-file in migration directory)
// set npx sequelize-cli db:migrate
// !!that's all!!
// something else: npx sequelize-cli db:migrate:undo => rollback last migrate
//////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////// DOTENV
// set npm install dotenv
// set in main file => const dotenv = require(`dotenv`);
// set in main file => dotenv.config();
// crete .env file => write example: DB_USER=root
// crete const.config file => write example: module.exports={DB_NAME: process.env.DB_NAME}
//////////////////////////////////////////////////////////////////////////////////////
