import express from 'express'
import deleteStudentController from '../controller/deleteStudentController.js';

const deleteStudent=express.Router();

deleteStudent.delete('/delete/:id',deleteStudentController)

export default deleteStudent