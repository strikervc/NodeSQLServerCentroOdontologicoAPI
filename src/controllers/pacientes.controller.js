const Paciente = require("../models/pacientes.model");


//Agregar nuevo artículo
exports.addPatient = (req, res) => {
    //Validate request
    if (!req.body) {
      res.status(400).send({
      message: "Content can not be empty!"
     });
    } 

   console.log('req data', req.body);
   const paciente = new Paciente(req.body.idPersona, req.body.idEstado, req.body.idOdontologo);
  
    Paciente.create(paciente, (err, data) => {
    if (err)
     res.status(500).send({
     message:
        err.message || "Error while attemping create a patient."
    });
    else res.send(data);
    res.json({success: true, message: 'Articulo agregado exitosamente'});
   });
};


exports.getItems = (req, res) => {
    Paciente.get((pacientes)=>{
      console.log('Pacientes', pacientes);
      res.send(pacientes)
      res.json({success: true, message: 'Pacientes extraídos correctamente'});
    })
 };

 
exports.getItemsByID = (req, res) => {
    Paciente.getByID((err, items)=>{
      if(err)
      res.send(err);
      console.log('Paciente', items);
      res.send(items)
      res.json({success: true, message: 'Paciente encontrado correctamente'});
    })
 };


 exports.delete=(req, res) => {
    Paciente.delete(req.body.IdPersona, (err, item) =>{
      if(err)
      res.send(err);
      res.json({success: true, message: 'Paciente eliminado exitosamente'});
    });
  }