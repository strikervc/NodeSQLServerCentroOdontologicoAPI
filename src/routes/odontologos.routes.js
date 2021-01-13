const express = require("express");
const router = express.Router();

const odontologoController = require('../controllers/odontologos.controller');


router.post('/add', function(req, res){
    odontologoController.create
});

router.get('/get', function(req, res){
    odontologoController.getItems
});

router.get('/get/byId', function(req, res){
    odontologoController.getItemsByID
});

router.delete('/delete/byId', function(req, res){
    odontologoController.delete
});


module.exports = router;