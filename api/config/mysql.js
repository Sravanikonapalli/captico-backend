require('dotenv').config();

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10, // Adjust based on traffic
  queueLimit: 0,
});

pool.getConnection((err) => {
  if (err) {
    console.error('MySQL Connection Failed:', err.message);
    process.exit(1);
  } else {
    console.log('MySQL Connected');
  }
});


module.exports = pool.promise();
