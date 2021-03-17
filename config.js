const auth = require("./auth");

module.exports = {
  PORT: process.env.PORT || 8000,
  DB: process.env.DB
    ? process.env.DB
    : `mongodb+srv://${auth.USER}:${auth.PASSWORD}@cluster0.6tpkm.mongodb.net/${auth.DBNAME}`,
};
