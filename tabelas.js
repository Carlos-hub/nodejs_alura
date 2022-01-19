class tabelas {
    init(conexao) {
        this.conexao = conexao
        console.log('Tabelas foram chamadas')
        this.criarAtendimentos()
        this.criaServico()
        this.criarPets()
    }
    criarAtendimentos() {
        const sql = `CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL
        AUTO_INCREMENT, cliente varchar(11) NOT NULL, pet varchar(20),servico varchar(20) NOT NULL,
         data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))`

        this.conexao.query(sql,(erro) =>{
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela criada com sucesso')
            }
        })
    }
    criaServico(){
        const sql=`CREATE TABLE IF NOT EXISTS servico (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, preco int NOT NULL, PRIMARY KEY(id))`
        this.conexao.query(sql,(erro) =>{
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela serviço criada com sucesso')
            }
        })
    }
    criarPets(){
        const sql = `CREATE TABLE IF NOT EXISTS pet(id int NOT NULL AUTO_INCREMENT, nome varchar(50),imagem varchar(200), PRIMARY KEY(id))`

        this.conexao.query(sql,(erro) =>{
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela PET criada com sucesso')
            }
        })
    }

}

module.exports = new tabelas