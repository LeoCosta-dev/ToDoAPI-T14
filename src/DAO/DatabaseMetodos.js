import Database from "../infra/Database.js"

class DatabaseMetodos{
    static activePragma(){
        const pragma = "PRAGMA foreing_keys = ON"
        Database.run(pragma, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras, ativas.")
            }
        })
    }
    static createTable(){

        this.activePragma()

        const tabela_usuarios = `
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR
        )
        `

        return new Promise ((resolve, reject) => {
            Database.run(tabela_usuarios, (e) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela criada com sucesso")
                }
            })
        })
    }

    /**
     * 
     * @param {Object} usuario 
     * @returns Promise<Object>
     */
    static popular(usuario) {
        const query = `INSERT INTO usuarios VALUES (?, ?, ?, ?)`
        const body = Object.values(usuario)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e) 
                } else { 
                    resolve({ message: "usuário criado com sucesso" }) 
                }
            })
        })
    }
    static listarTodos(){
        const query = "SELECT * FROM usuarios"
        return new Promise ((resolve, reject) => {
            Database.all(query, (e, rows)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve({rows:rows})
                }
            })
        })
    }
    static listaPorId(id){
        const query = "SELECT * FROM usuarios WHERE id = ?"
        return new Promise ((resolve, reject) => {
            Database.get(query, id, (e, result)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve(result)
                }
            } )
        })
    }
    static atualizaPorId(usuario, id){
        const query = `
        UPDATE usuarios SET (id, nome, email, telefone) = (?,?,?,?) WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            Database.run(query, [...usuario, id], (e, result) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }
    static deletaPorId(id){
        const query = "DELETE FROM usuarios WHERE id = ?"
        return new Promise ((resolve, reject) => {
            Database.run(query, id, (e)=>{
                if (e){
                    reject(e.message)
                } else {
                    resolve({error: false, idDeletado: id})
                }
            })
        })
    }
}

export default DatabaseMetodos