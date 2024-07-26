import mysql from 'mysql2/promise'
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mansa7773',
    database: 'student_db',
  });
// connection.connect((err) => {
//     if (err) {
//       console.error('Database connection failed: ' + err.stack);
//       return;
//     }
//     console.log('Connected to database.');
//   });
  
  export default connection;