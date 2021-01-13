//const db = require("../dboperations");
const config = require("../dbconfig");

const rest = new (require('rest-mssql-nodejs'))({
    user: config.user,
    password: config.password,
    server: config.server,
    database: config.database
})

const Paciente = function(idPersona, idEstado, idOdontologo) {
    this.ID_PERSONA = idPersona;
    this.ID_ESTADO = idEstado;
    this.ID_ODONTOLOGO = idOdontologo;
}

Paciente.create = (newPaciente, result) => {
 
    let query = `INSERT INTO TBL_PACIENTE(ID_PERSONA, ID_ESTADO, ID_ODONTOLOGO) 
                 VALUES (${newPaciente.idPersona}, ${newPaciente.idEstado}, ${newPaciente.idOdontologo});`;
    db.query(config, query, true, (err, res) => {
        if(err) {   
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Paciente agregado exitosamente");
    });    
}

Paciente.get = (result) => {
    setTimeout(async()=>{
        const data = await rest.executeQuery('SELECT * FROM TBL_PACIENTE');
            console.log('Patients fetched succesfully');
            console.log(data.data);
            result(null, data.data);
    
    }, 1500);
}

Paciente.getByID = (id, result) => {
    db.query(`SELECT * FROM TBL_PACIENTE WHERE ID_PACIENTE=${id}`, (err, res)=>{
        if(err){
            console.log("Error while fetching all items", err);
            result(null, err);
        }else{
            console.log('Patient found in database');
            result(null, res);
        }

    });
}

Paciente.delete = (id, result) => { 
    let query = `DELETE FROM TBL_PACIENTE WHERE ID_PACIENTE = ${id}});`;
    db.query(query, true, (err, res)=>{
        if(err){
            console.log("Error while deleting the item");
            result(null, err);
        }else{
            result(null, res);
        }
    });
}
module.exports = Paciente;
