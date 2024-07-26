import updateStudentController from "../controller/updateStudentController.js";
import express from 'express'

const updateStudent=express.Router();

updateStudent.put('/update/:id',updateStudentController)

export default updateStudent;