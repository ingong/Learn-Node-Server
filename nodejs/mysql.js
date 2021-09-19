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
  console.log(results);
});

connection.end();

// const dotenv = require('dotenv');
// const db = require('mysql2/promise');
// dotenv.config({ path: './.env' });
// let database = {};

// database.init = async app => {
//   const pool = db.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PWD,
//     database: process.env.DB_NAME,
//   });

//   database.pool = pool;
//   app.set('database', database);
//   const dbTest = app.get('database');
//   const result = await test(dbTest);
//   console.log(result);
// };

// const test = async db => {
//   const conn = await db.pool.getConnection(async conn => conn);
//   const result = await conn.query('SELECT * FROM topic', function (error, results, fields) {
//     return results;
//   });
//   conn.release();
//   return result;
// };

// module.exports = database;
