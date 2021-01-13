const express = require("express");
const router = express.Router();

const personaController = require('../controllers/persona.controller');


router.post('/add', function(req, res){
    personaController.addPersona
});

router.get('/get', function(req, res){
    personaController.getItems
});

router.get('/get/byId', function(req, res){
    personaController.getItemsByID
});

router.delete('/delete/byId', function(req, res){
    personaController.delete
});


module.exports = router;