'use strict'
const router = require('express').Router();
var SwitchController = require('../../Controller/SwitchController');

//listado de rutas para los metodos

router.get('/:id', SwitchController.findOne);
router.post('/', SwitchController.create);
router.put('/:id', SwitchController.update);

//exportan metodos del router
module.exports = router;