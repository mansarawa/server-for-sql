import express from 'express'
import oneStudentController from '../controller/oneStudentController.js';

const oneStudent=express.Router();

oneStudent.get('/onestudent/:id',oneStudentController)

export default oneStudent;