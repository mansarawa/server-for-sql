import express from 'express'
import getStudentController from '../controller/getStudentController.js';

const router=express.Router();

router.get('/getall',getStudentController)

export default router;