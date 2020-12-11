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
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true,
      },
    },
  },
};
