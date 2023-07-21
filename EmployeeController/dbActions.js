const express=require("express")
const mySqlConnection=require('../connection')

const checkEmployee=(req,res,next)=>{
const query=`SELECT * FROM Employee WHERE Emp_id=${req.body.id}`;
mySqlConnection.query(query,(err,result)=>{
    if(err){
       next();
       console.log('does not exist')
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

module.exports={checkEmployee, addEmployee}