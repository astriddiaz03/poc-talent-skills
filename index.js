const connection = require ("./database/connection.js");
const express = require("express");
const cors= require ("cors");


console.log("API Rest with nodeJS for talent skill");

//connection bd
connection();

//Server
const app= express();
const port = 3000

//conf cors
app.use(cors());

//object json
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Cargar rutas
const AssignamentRoutes = require("./routes/assignamentRoutes.js");
app.use('/api/assignament', AssignamentRoutes);
app.use('/api/report', AssignamentRoutes);


app.listen( port, ()=>{
    console.log("Server Listening port:", port)
})

