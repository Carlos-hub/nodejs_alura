const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user: 'conexao',
    password:'carloscp82ip83',
    database:'menufast'
})
module.exports = conexao