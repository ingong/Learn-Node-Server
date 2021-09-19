const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const db = require('mysql2');
const connection = db.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});

connection.connect();

connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error) throw error;
  // console.log(process.env);
  console.log(results);
});

connection.end();
