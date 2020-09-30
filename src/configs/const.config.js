module.exports={
  DB_NAME: process.env.DB_NAME || `schema_car`,
  DB_USER: process.env.DB_USER || `root`,
  DB_PASS: process.env.DB_PASS || `qw1234qw`,

  HOST:process.env.HOST || `127.0.0.1`,
  DIALECT:process.env.DIALECT || `mysql`,

  AUTHORIZATION: process.env.AUTHORIZATION,

  TABLE_NAME_OAUTH: process.env.TABLE_NAME_OAUTH,
  TABLE_NAME_USER: process.env.TABLE_NAME_USER,
  TABLE_NAME_CAR: process.env.TABLE_NAME_CAR,

  MAX_PHOTO_SIZE: process.env.MAX_PHOTO_SIZE,
  MAX_DOC_SIZE: process.env.MAX_DOC_SIZE,

  PHOTO_MIMETYPES:process.env.PHOTO_MIMETYPES,
  DOCS_MIMETYPES:process.env.DOCS_MIMETYPES,
}