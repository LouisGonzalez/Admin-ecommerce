'use strict'
const router = require('express').Router();
var ReportController = require('../../Controller/ReportController');

//listado de rutas para los metodos

router.get('/', ReportController.showAll);
router.get('/:id', ReportController.findOne);
router.post('/', ReportController.create);
router.put('/:id', ReportController.update);
router.delete('/:id', ReportController.del)

module.exports = router;