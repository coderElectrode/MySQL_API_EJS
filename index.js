const express=require('express')
const connection=require('./connection');
const bodyParser = require('body-parser');
const  createDB=require('./dbCOntroller')
const checkDB=require('./dbCOntroller')
const router=express.Router();


const app=express();
app.use(router);
app.use(bodyParser.json());

app.listen(5000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Serveer Running On PORT 5000");
        connection.connect();
    }
})

router.post('/',checkDB,createDB)

//router.post('/employee',checkEmployee,)
