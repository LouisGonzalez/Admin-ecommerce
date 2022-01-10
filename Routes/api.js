'use strict'
const router = require('express').Router();

var apiReport = require('./Api/ReportRouter');
//si una ruta viene con /report el encargado de la ruta sera apiReport, y se concatena a router
router.use('/report', apiReport);

var apiSwitch = require('./Api/SwitchRouter');
//Si una ruta viene con /switch el encargado de la ruta sera apiSwitch, y se concatena a router
router.use('/switch',apiSwitch);

var apiUser = require('./Api/UserRouter');
//si una ruta viene con /user el encargado de la ruta sera apiUser, y se concatena a router
router.use('/user',apiUser);

module.exports = router;