const conexao = require('../infraestrutura/database/conexao')
const uploadDeArquivo = require('../infraestrutura/arquivos/uploadDeArquivos')
class Pet{
    adiciona(pet,res){
        const sql = 'INSERT INTO pet SET ?'
        uploadDeArquivo(pet.imagem, pet.nome,(erro,novoCaminho) =>{
            if (erro){
                res.status(400).json({erro})
            }else{
                const novoPet = { nome:pet.nome,imagem:novoCaminho }
            conexao.query(sql,novoPet,erro =>{
                if(erro){
                    console.log('erro')
                    res.status(400).json(erro)
                }else{
                    res.status(200).json(novoPet)
                }
            })
            }
        })
        
    }
    lista(res){
        const sql = 'SELECT * FROM pet'

        conexao.query(sql,(erro,resultados) => {
            if (erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json(resultados)
            }
        })
    }
}
module.exports = new Pet()