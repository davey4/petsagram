require("dotenv").config();
module.exports = {
  development: {
    database: "petsagram_development",
    dialect: "postgres",
    logging: false,
  },
  test: {
    database: "petsagram_test",
    dialect: "postgres",
  },
  production: {
    database: "petsagram_production",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true,
      },
    },
  },
};
