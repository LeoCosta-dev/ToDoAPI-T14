import Database from "../infra/Database.js"

class DatabaseMetodos{
    static createTable(){
        const tabela_usuarios = `
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR
        )
        `

        Database.run(tabela_usuarios, (e) => {
            if(e){
                console.log(e.message)
            } else {
                console.log("Tabela criada com sucesso")
            }
        })
    }

    static iserir(obj, Database){
        Database.push(obj)

    }
}

export default DatabaseMetodos