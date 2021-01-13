const express = require("express");
const router = express.Router();

const pacienteController = require('../controllers/pacientes.controller');


router.post('/add', function(req, res){
    pacienteController.create
});

router.get('/get', function(req, res){
    pacienteController.getItems
});

router.get('/get/byId', function(req, res){
    pacienteController.getItemsByID
});

router.delete('/delete/byId', function(req, res){
    pacienteController.delete
});


module.exports = router;