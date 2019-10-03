const viajeController = {};
const mysqlConnection = require('../database');

viajeController.todosLosViajes = (req, res) => {

    var tamanioBody = Object.keys(req.body).length;
    const fechas = req.body;
    // console.log(fechas);

    // console.log(tamanioBody);


        if (tamanioBody == 0) {

            mysqlConnection.query('SELECT * FROM vista_todos_los_viajes', (err, viajes) => {
                if (err) {
                    console.log('error al obtener viajes');
                    res.send('error');
                } else {
                    console.log('todos los viajes enviados');
                    const data = { viajes };
                    res.send(data);
                }
            });

        } else {
            mysqlConnection.query('SELECT * FROM vista_todos_los_viajes WHERE DATE(created_at) BETWEEN ? AND ?', [fechas.fecha1, fechas.fecha2], (err, viajes) => {
                if (err) {
                    console.log('error al obtener viajes');
                    console.log(err);
                    res.send('error');
                } else {
                    console.log('todos los viajes enviados');
                    const data = { viajes };
                    res.send(data);
                }
            });
        }



};

module.exports = viajeController;