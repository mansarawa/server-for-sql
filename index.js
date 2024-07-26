
import express from 'express';
import connection from './config/dbConfig.js';
import router from './routes/getStudent.js';
import oneStudent from './routes/getOnestudent.js';
import createStudent from './routes/createStudent.js';
import updateStudent from './routes/updateStudent.js';
import deleteStudent from './routes/deleteStudent.js';
const app = express();


app.use(express.json());
app.use('/',router);
app.use('/',oneStudent);
app.use('/',createStudent);
app.use('/',updateStudent);
app.use('/',deleteStudent);
app.get('/', (req, res) => {
    return res.status(200).send('<h1>Server is running</h1>');
});
await connection;

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
