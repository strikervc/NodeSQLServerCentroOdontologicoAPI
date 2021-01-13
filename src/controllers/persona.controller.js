const Persona = require("../models/persona.model");

//Agregar nuevo artículo
exports.addPersona = (req, res) => {
    //Validate request
    if (!req.body) {
      res.status(400).send({
      message: "Content can not be empty!"
     });
    } 

   console.log('req data', req.body);
   const persona = new Persona(req.body.nombre, req.body.apellido, req.body.apellido, req.body.cedula, req.body.telefono, req.body.correo, req.body.fecha_nac, req.body.fecha_reg);
  
   Persona.create(persona, (err, data) => {
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
    Persona.get((personas)=>{
      console.log('Personas', personas);
      res.send(personas)
      res.json({success: true, message: 'Odontologos extraídos correctamente'});
    })
 };

 
exports.getItemsByID = (req, res) => {
    Persona.getByID((err, items)=>{
      if(err)
      res.send(err);
      console.log('Persona', items);
      res.send(items)
      res.json({success: true, message: 'Persona encontrada correctamente'});
    })
 };


 exports.delete=(req, res) => {
    Persona.delete(req.body.idPersona, (err, item) =>{
      if(err)
      res.send(err);
      res.json({success: true, message: 'Paciente eliminado exitosamente'});
    });
  }