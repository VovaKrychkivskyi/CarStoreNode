const joi = require(`joi`)
const {EMAIL} = require(`../configs/const.config`)

module.exports = joi.object().keys({
  name: joi.string().trim().alphanum().min(2).max(10).required(),
  password: joi.string().trim().min(3).max(3).required(),
  email: joi.string().trim().regex(EMAIL).max(50).required()
})