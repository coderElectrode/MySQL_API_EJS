const express=require('express')
const router=express.Router();
const {checkEmployee,addEmployee,getAllEmpDetails,updateUserNameByID,deleteEmployeeByID}=require('../EmployeeController/dbActions')


router.post("/add",checkEmployee,addEmployee)
router.get("/list",getAllEmpDetails);
router.post("/update",updateUserNameByID)
router.post("/detete",deleteEmployeeByID)



module.exports=router