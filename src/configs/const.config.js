module.exports={
  DB_NAME: process.env.DB_NAME || `cars_base`,
  DB_USER: process.env.DB_USER || `root`,
  DB_PASS: process.env.DB_PASS || `qw1234qw`,

  HOST:process.env.HOST || `127.0.0.1`,
  DIALECT:process.env.DIALECT || `mysql`
}