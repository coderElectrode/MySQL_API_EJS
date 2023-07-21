const mySqlConnection = require('./connection')
const checkDBTable = (req, res,next) => {
    mySqlConnection.query("SELECT * FROM Employee", (err) => {
        if (err) {
            var sql = "CREATE TABLE Employee (Emp_id VARCHAR(10), name VARCHAR(255), email VARCHAR(225))";
            mySqlConnection.query(sql, function (err, result) {
                if (err) throw err;
                res.send({
                    Status: 'Success',
                    Message: "Table created"
                })
            });
        
           
        }
        else {
            res.send({
                Status: "Failed",
                Message: 'Database Already Exist'
            });
        }
    })


}


module.exports = checkDBTable;