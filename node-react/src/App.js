// import express
const express = require('express');
const app = express(); 
// setting port
app.set('port',process.env.PORT||4000);

//Middlewares
app.use(express.json());
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//importing route
const employeeRouters = require('./routes/EmployeeRoute');
//Route
app.use('/employee', employeeRouters);

app.use('/test', (req, res) => {
  res.send("Test route");
});

app.use('/', (req,res) => {
  res.send("Hola Mundo");
});

app.listen(app.get('port'),()=>{
  console.log("Server Nodejs");
})
