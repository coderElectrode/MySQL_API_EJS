const express = require('express')
const connection = require('./connection');
const checkDBTable = require('./dbCOntroller')
const employeeController = require('./EmployeeController/employee')
const app = express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
//app.use(bodyParser.json());
app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Serveer Running On PORT 5000");
        connection.connect();
    }
})

app.post('/', checkDBTable);
app.use("/employee", employeeController);
