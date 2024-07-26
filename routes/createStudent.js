import express from 'express'
import createStudentController from '../controller/createStudentController.js';

const createStudent=express.Router();

createStudent.post('/create',createStudentController)
export default createStudent