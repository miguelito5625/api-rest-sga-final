const express = require('express');

const app = express();

//Settings
app.set('port', 3000);

//Middlewares
app.use(express.json());

//Routes
app.use('/', require('./routes/index'));


//Start server

app.listen(app.get('port'), () =>{
    console.log('server on port ', app.get('port'));
})