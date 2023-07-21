const mySqlConnection = require('./connection')
const checkDB = (req, res, next) => {
    mySqlConnection.query("SELECT * FROM Employee", (err) => {
        if (err) {
            return true;
            next();

        }
        else {
            res.send({
                Status: "Failed",
                Message: 'Database Already Exist'
            });
        }
    })


}

const createDB=(req,res)=>{
    var sql = "CREATE TABLE Employee (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    res.send({
        Status:'Success',
        Message:"Table created"
    })
  });

}

module.exports=checkDB, createDB;