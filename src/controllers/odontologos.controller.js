const Odontologo = require("../models/odontologos.model");

//Agregar nuevo artículo
exports.addOdontologo= (req, res) => {
    //Validate request
    if (!req.body) {
      res.status(400).send({
      message: "Content can not be empty!"
     });
    } 

   console.log('req data', req.body);
   const odontologo = new Odontologo(req.body.idEmpleado, req.body.idConsultorio);
  
   Odontologo.create(odontologo, (err, data) => {
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
    Odontologo.get((odontologos)=>{
      console.log('Odontologos', odontologos);
      res.send(odontologos)
      res.json({success: true, message: 'Odontologos extraídos correctamente'});
    })
 };

 
exports.getItemsByID = (req, res) => {
    Odontologo.getByID((err, items)=>{
      if(err)
      res.send(err);
      console.log('Odontologo', items);
      res.send(items)
      res.json({success: true, message: 'Odontologo encontrado correctamente'});
    })
 };


 exports.delete=(req, res) => {
    Odontologo.delete(req.body.IdOdontologo, (err, item) =>{
      if(err)
      res.send(err);
      res.json({success: true, message: 'Paciente eliminado exitosamente'});
    });
  }