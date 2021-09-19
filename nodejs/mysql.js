require('dotenv').config();
const db = require('mysql2');
const connection = db.createConnection({
  host: 'localhost',
  user: 'root',
  password: '*dlsthd12',
  database: 'opentutorials',
});

connection.connect();

connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();
