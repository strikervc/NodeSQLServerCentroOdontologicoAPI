const express = require("express");
const app = express();
const bodyParser = require ('body-parser');
var cors = require('cors');
var port = process.env.PORT || 8090;
// const config = require('./dbconfig');
// const Persona = require("./models/persona.model");
//const rest = new (require('rest-mssql-nodejs'))({
    //user: config.user,
    //password: config.password,
    //server: config.server,
    //database: config.database
//})

//SELECT
//setTimeout(async()=>{
    //const data = await rest.executeQuery('SELECT * FROM TBL_PACIENTE');
        //console.log('Patients fetched succesfully');
        //console.log(data.data);

//}, 1500);

//INSERT
// const newPersona = new Persona("Armando", "Perez", '11111111111', '8090980980',"correo@testing",'04/12/2000');
// setTimeout(async()=>{
//     const data = await rest.executeQuery("INSERT INTO TBL_PERSONA (NOMBRE_PERSONA, APELLIDO_PERSONA, CEDULA_PERSONA, TELEFONO_PERSONA, CORREO_PERSONA, FECHA_NAC_EMPLEADO) VALUES (@nombre, @apellido, @cedula, @telefono, @correo, @fecha_nac)",[{
//         name: "nombre",
//         type: "varchar",
//         value: newPersona.NOMBRE_PERSONA 
//     },{
//         name: "apellido",
//         type: "varchar",
//         value: newPersona.APELLIDO_PERSONA
//     },{
//         name: "cedula",
//         type: "char",
//         value: newPersona.CEDULA_PERSONA
//     },{
//         name: "telefono",
//         type: "char",
//         value: newPersona.TELEFONO_PERSONA
//     },{
//         name: "correo",
//         type: "varchar",
//         value: newPersona.CORREO_PERSONA
//     },{
//         name: "fecha_nac",
//         type: "date",
//         value: newPersona.FECHA_NAC_EMPLEADO
//     }]);

//     console.log(data);

// }, 1500);

//routes
const pacienteRoutes = require("./routes/pacientes.routes");
const odontologoRoutes = require("./routes/odontologos.routes");
const personaRoutes = require("./routes/persona.routes");

//parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extend: false}));

// parse request data content type application/json
app.use(bodyParser.json());
app.use(cors);
  
app.use("/api/pacientes", pacienteRoutes);
app.use("/api/odontologos", odontologoRoutes);
app.use("/api/persona", personaRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));

