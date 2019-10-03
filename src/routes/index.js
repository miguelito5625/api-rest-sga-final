const routes = require('express').Router();

routes.use(require('./viaje'));
routes.use(require('./aerista'));


module.exports = routes;