// Requisitar os modulos
const express = require('express');
const connect = require('./conexao.js');

// Chamar o express
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Porta
const PORT = process.env.PORT || 3000;

// Manipular o home utilizando get
app.get('/', (req, res) => {
    res.send('Aplicação node está em execução na porta '+ PORT);
    res.end();
});

//Metodo para selecionar todos  
app.get('/usuario', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from usuario', res);
});

//Metodo para visualizar por id
app.get('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from usuario where id='+ id, res);
});

//Método para inserir
app.post('/usuario/', (req, res) => {
    let nome = req.body.nome;
    let idade = req.body.idade;
    let celular = req.body.celular;
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into usuario (nome, idade, celular) value ('"+nome+"','"+idade+"','"+celular+"')", res);
});

//Metodo para alterar
app.put('/usuario/:id', (req, res) => {
    let nome = req.body.nome;
    let idade = req.body.idade;
    let celular = req.body.celular;
    let id = req.params.id;
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("update usuario set nome ='"+nome+"', idade ='"+idade+"', celular ='"+celular+"' where id="+id, res);
});
//Método para deletar
app.delete('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from usuario where id="+ id, res);
});


// Servidor
app.listen(PORT, () =>{ console.log(`Servidor iniciado na porta ${PORT}`);});