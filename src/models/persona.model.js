//const db = require("../dboperations");
const config = require("../dbconfig");

const rest = new (require('rest-mssql-nodejs'))({
    user: config.user,
    password: config.password,
    server: config.server,
    database: config.database
})

const Persona = function(Nombre, Apellido, Cedula, Telefono, Correo, Fecha_Nac) {
    this.NOMBRE_PERSONA = Nombre;
    this.APELLIDO_PERSONA = Apellido;
    this.CEDULA_PERSONA = Cedula;
    this.TELEFONO_PERSONA = Telefono;
    this.CORREO_PERSONA = Correo;
    this.FECHA_NAC_EMPLEADO = Fecha_Nac;
}

Persona.create = (newPersona, result) => {
    setTimeout(async()=>{
        const data = await rest.executeQuery("INSERT INTO TBL_PERSONA (NOMBRE_PERSONA, APELLIDO_PERSONA, CEDULA_PERSONA, TELEFONO_PERSONA, CORREO_PERSONA, FECHA_NAC_EMPLEADO) VALUES (@nombre, @apellido, @cedula, @telefono, @correo, @fecha_nac)",[{
            name: "nombre",
            type: "varchar",
            value: newPersona.NOMBRE_PERSONA 
        },{
            name: "apellido",
            type: "varchar",
            value: newPersona.APELLIDO_PERSONA
        },{
            name: "cedula",
            type: "char",
            value: newPersona.CEDULA_PERSONA
        },{
            name: "telefono",
            type: "char",
            value: newPersona.TELEFONO_PERSONA
        },{
            name: "correo",
            type: "varchar",
            value: newPersona.CORREO_PERSONA
        },{
            name: "fecha_nac",
            type: "date",
            value: newPersona.FECHA_NAC_EMPLEADO
        }]);

        console.log(data.data);
    
    }, 1500);
}

Persona.get = (result) => {
    setTimeout(async()=>{
        const data = await rest.executeQuery('SELECT * FROM TBL_PERSONA');
            console.log('Persons fetched succesfully');
            console.log(data.data);
            result(null, data.data);
    
    }, 1500);
}

Persona.getByID = (id, result) => {
    setTimeout(async()=>{
        const data = await rest.executeQuery('SELECT * FROM TBL_PERSONA WHERE ID_PERSONA=@ID', [{
            name: "ID",
            type: "int",
            value: id
        }]);
            console.log('Person fetched succesfully');
            console.log(data.data);
            result(null, data.data);
    
    }, 1500);
}

Persona.delete = (id, result) => { 
    setTimeout(async()=>{
        const data = await rest.executeQuery('DELETE FROM TBL_PERSONA WHERE ID_PERSONA=@ID', [{
            name: "ID",
            type: "int",
            value: id
        }]);
            console.log('Doctor dropped succesfully');
            console.log(data.data);
            result(null, data.data);
    
    }, 1500);
}


module.exports = Persona;
