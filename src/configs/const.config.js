module.exports = {
  DB_NAME: process.env.DB_NAME || `schema_car`,
  DB_USER: process.env.DB_USER || `root`,
  DB_PASS: process.env.DB_PASS || `qw1234qw`,

  HOST: process.env.HOST || `127.0.0.1`,
  DIALECT: process.env.DIALECT || `mysql`,

  AUTHORIZATION: process.env.AUTHORIZATION,

  TABLE_NAME_OAUTH: process.env.TABLE_NAME_OAUTH,
  TABLE_NAME_USER: process.env.TABLE_NAME_USER,
  TABLE_NAME_CAR: process.env.TABLE_NAME_CAR,

  ROOT_EMAIL: process.env.ROOT_EMAIL,
  ROOT_EMAIL_PASS: process.env.ROOT_EMAIL_PASS,

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_LIFE_TIME: process.env.ACCESS_TOKEN_LIFE_TIME,
  REFRESH_TOKEN_LIFE_TIME: process.env.REFRESH_TOKEN_LIFE_TIME,

  MAX_PHOTO_SIZE: process.env.MAX_PHOTO_SIZE,
  MAX_DOC_SIZE: process.env.MAX_DOC_SIZE,

  PHOTO_MIMETYPES: process.env.PHOTO_MIMETYPES,
  DOCS_MIMETYPES: process.env.DOCS_MIMETYPES,

  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}