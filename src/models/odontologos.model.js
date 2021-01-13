//const db = require("../dboperations");
const config = require("../dbconfig");

const rest = new (require('rest-mssql-nodejs'))({
    user: config.user,
    password: config.password,
    server: config.server,
    database: config.database
})

const Odontologo = function(idEmpleado, idConsultorio) {
    this.ID_EMPLEADO = idEmpleado;
    this.ID_CONSULTORIO = idConsultorio;
    
}

Odontologo.create = (newOdontologo, result) => {
    setTimeout(async()=>{
        const data = await rest.executeQuery('INSERT INTO TBL_ODONTOLOGO (ID_EMPLEADO, ID_CONSULTORIO) VALUES (@IDEMP, @IDCON)',[{
            name: "ID_EMPLEADO",
            type: "int",
            value: newOdontologo.ID_EMPLEADO    
        },{
            name: "ID_CONSULTORIO",
            type: "int",
            value: newOdontologo.ID_CONSULTORIO
        }]);

        console.log(data.data);
    
    }, 1500);

}

Odontologo.get = (result) => {
    setTimeout(async()=>{
        const data = await rest.executeQuery('SELECT * FROM TBL_PACIENTE');
            console.log('Patients fetched succesfully');
            console.log(data.data);
            result(null, data.data);
    
    }, 1500);
}

Odontologo.getByID = (id, result) => {
    setTimeout(async()=>{
        const data = await rest.executeQuery('SELECT * FROM TBL_ODONTOLOGO WHERE ID_ODONTOLOGO=@ID', [{
            name: "ID_ODONTOLOGO",
            type: "int",
            value: id
        }]);
            console.log('Patient fetched succesfully');
            console.log(data.data);
            result(null, data.data);
    
    }, 1500);
}

Odontologo.delete = (id, result) => { 
    setTimeout(async()=>{
        const data = await rest.executeQuery('DELETE FROM TBL_ODONTOLOGO WHERE ID_ODONTOLOGO=@ID', [{
            name: "ID_ODONTOLOGO",
            type: "int",
            value: id
        }]);
            console.log('Doctor dropped succesfully');
            console.log(data.data);
            result(null, data.data);
    
    }, 1500);
}
module.exports = Odontologo;
