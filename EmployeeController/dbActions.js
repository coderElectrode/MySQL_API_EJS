const express=require("express")
const mySqlConnection=require('../connection')

const checkEmployee=(req,res,next)=>{
   const id=req.body.Emp_id;
const query=`SELECT * FROM Employee WHERE Emp_id=${id}`;
console.log(query);
mySqlConnection.query(query,(err,result)=>{
    if(result==""){
       next();
       console.log('Employee does not exist')
    }
    else{
        res.send({
            Status:"Failed",
            Message:"Employee Already Exist"
        })
    }
})
}


const addEmployee =(req,res,next)=>{
    var sql = `INSERT INTO Employee (Emp_id, name,email) VALUES ('${req.body.Emp_id}', '${req.body.name}','${req.body.email}')`;
    //var sql = `INSERT INTO Employee VALUES(${req.body.Emp_id},${req.body.name} ,${req.body.email})`;
    mySqlConnection.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({
            status:"Successful",
            Message:"Employee Added To database"
        })
    })
}

const getAllEmpDetails=(req,res)=>{
    const query=`SELECT * FROM Employee`; 
    mySqlConnection.query(query,(err,result)=>{
        res.send({
            Status:'Successful',
            data:result,
        })

    })

}

const updateUserNameByID=(req,res)=>{
    const id=req.body.Emp_id;
    const query=`UPDATE Employee SET name='${req.body.name}' WHERE Emp_id=${id}`;
    const update=mySqlConnection.query(query,(err,result)=>{
         if(result.affectedRows==0){
             res.send({
                 Status:"Failed",
                Message:"Enter Correct Employee Id, ID does not Match"
             })
        }
        else{
            res.send({
                Status:"Successful",
                Message:"Employee Name Updated, You can check it BY browsing link-> localhost:5000/employee/list"
            })
        }

      
    })
}

const deleteEmployeeByID=(req,res)=>{
    const id=req.body.Emp_id;
    const query=`DELETE FROM Employee WHERE Emp_id=${id}`;
    const update=mySqlConnection.query(query,(err,result)=>{
        if(result.affectedRows==0){
            res.send({
                Status:"Failed",
                Message:"Please Enter Correct Employee ID"
            })
        }
        else{
            res.send({
                Status:"Successful",
                Message:"Employee Record Deleted, You can check it BY browsing link-> localhost:5000/employee/list"
            })
        }
        
    })
 
}


module.exports={checkEmployee, addEmployee,getAllEmpDetails,updateUserNameByID,deleteEmployeeByID}