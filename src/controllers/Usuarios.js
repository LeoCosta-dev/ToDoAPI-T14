import DatabaseMetodos from "../utils/DatabaseMetodos.js"
import UsuariosModel from "../models/UsuariosModel.js"

class Usuarios{
    static routers(app){
        
        app.get("/usuarios", async (req, res) =>{
            const response = await DatabaseMetodos.listarTodos()
            res.status(200).json(response)
        })
        app.post("/usuarios", async(req, res) => {
            const usuario = new UsuariosModel(...Object.values(req.body))
            try {                
                const response = await DatabaseMetodos.popular(usuario)
                res.status(201).json(response)
            } catch (e) {
                res.status(400).json(e)
            }
        })
    }
}

export default Usuarios

