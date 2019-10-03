const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '35.226.107.150',
    user: 'desarrollador',
    password: 'mariobross5625',
    port: 3306,
    database: 'bandegua',
    timezone: 'utc',
    dateStrings : true,
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;