const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "MMOrogue04",
    database: "Hollywood",
  },
});

module.exports = { db };
