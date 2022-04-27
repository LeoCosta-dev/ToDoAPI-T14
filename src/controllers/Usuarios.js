import DatabaseMetodos from "../DAO/DatabaseMetodos.js"
import UsuariosModel from "../models/UsuariosModel.js"
import Validacoes from "../services/Validacoes.js"

class Usuarios{
    static routers(app){
        
        app.get("/usuarios", async (req, res) =>{
            const response = await DatabaseMetodos.listarTodos()
            res.status(200).json(response)
        })
        app.post("/usuarios", async(req, res) => {
            try {                
                if(Validacoes.validaNome(req.body.nome)){
                    const usuario = new UsuariosModel(...Object.values(req.body))
                    const response = await DatabaseMetodos.popular(usuario)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição fora dos padrões, favor rever.")
                }
            } catch (e) {
                res.status(400).json({erro: e.message})
            }
        })
    }
}

export default Usuarios

