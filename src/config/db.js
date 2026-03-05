const { Pool } = require("pg");

const pool = new Pool({
  user: "shubhampanwar",
  host: "localhost",
  database: "prime_db",
  password: "",
  port: 5432,
});

pool.connect()
  .then(() => console.log("✅ PostgreSQL Connected"))
  .catch(err => console.error("❌ DB Connection Error:", err));

module.exports = pool;