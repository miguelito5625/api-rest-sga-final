const viajeRoute = require('express').Router();
const { viajeController } = require('../controllers/index');

viajeRoute.get('/aereos/mostrartodos', viajeController.todosLosViajes);

module.exports = viajeRoute;