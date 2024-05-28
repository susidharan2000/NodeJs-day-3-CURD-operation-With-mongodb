import express, { Router } from "express";
import {createEmp, deleteEmp, getEmployee, getEmployeeById, updateEmp} from "../Controllers/EmpComtroller.js";


const router = express.Router();


router.post('/create',createEmp);
router.get("/getEmp",getEmployee);
router.get("/getEmp/:id",getEmployeeById)
router.put('/update/:id',updateEmp);
router.delete('/delete/:id',deleteEmp);



export default router;