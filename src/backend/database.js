const mysql = require('mysql2');

// Create a connection
const connection = mysql.createConnection({
  host: 'localhost',      // Update this if your MySQL server is on a different host
  user: 'root',           // Replace 'root' with your MySQL username
  password: 'HarleyAmy123!', 
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id', connection.threadId);

  // Create a new database
  connection.query('CREATE DATABASE receipt_reader', (err, results) => {
    if (err) throw err;
    console.log('Database created successfully:', results);
  });

  // Close the connection
  connection.end();
});

