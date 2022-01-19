const moment = require('moment')
const conexao = require('../infraestrutura/database/conexao')

class Servico {

    lista(res){
        const sql = 'SELECT * FROM servico'

        conexao.query(sql,(erro,resultados) => {
            if (erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Servico