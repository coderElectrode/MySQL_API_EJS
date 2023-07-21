const mysql=require('mysql2');
var mySqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'470211',
    database:'Employee_details'
})
mySqlConnection.connect((err)=>{
    if(err){
        console.log("Error in DB Connection",JSON.stringify(err,undefined,2));
    }
    else{
        console.log("DB connected Successfully");
       
    }
})

module.exports=mySqlConnection