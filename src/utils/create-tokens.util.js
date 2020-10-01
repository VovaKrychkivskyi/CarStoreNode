const jwt = require(`jsonwebtoken`);

//TODO why don't work dotenv in both jwt.sign
// const {
//   ACCESS_TOKEN_SECRET,
//   REFRESH_TOKEN_SECRET,
//   ACCESS_TOKEN_LIFE_TIME,
//   REFRESH_TOKEN_LIFE_TIME
// } = require(`../configs/const.config`);

module.exports = () => {
  const access_token = jwt.sign({}, `secret`, {expiresIn: `1m`})
  const refresh_token = jwt.sign({}, `newSecret`, {expiresIn: `2m`})
  return {
    access_token,
    refresh_token
  }
}