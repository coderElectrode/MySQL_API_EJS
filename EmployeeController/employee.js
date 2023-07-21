const express=require('express')
const router=express.Router();
const {checkEmployee,addEmployee}=require('../EmployeeController/dbActions')


router.post("/add",checkEmployee,addEmployee)



module.exports=router