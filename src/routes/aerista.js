const aeristaRoute = require('express').Router();

aeristaRoute.get('/aeristatest', (req, res) => {
res.send('prueba aerista');
});

module.exports = aeristaRoute;