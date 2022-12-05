const mysql = require('mysql');

execSQLQuery = (sqlQry, res) => {
const connection = mysql.createConnection({
host : 'localhost',
port : '3306',
user : 'root',
password : '',
database : 'atividade3'
});

connection.query(sqlQry, function(error, results, fields){
if(error) {
    res.json(error);
} else {
    res.json(results);
    connection.end();
    console.log('Comando executado com sucesso!');
};
});
};

exports.execSQLQuery = execSQLQuery;