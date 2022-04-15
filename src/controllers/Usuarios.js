import Validacoes from "../services/Validacoes.js"

class Usuarios{
    static routers(app){
        
        app.get("/usuarios", (req, res)=>{
            if(Validacoes.validaNome("Diego")){
                res.send("<h1>Funciona</h1>")
            } else {
                res.send("<h1>Deu Ruim!</h1>")
            }
        })
        app.post("/usuarios", (req, res) =>{
            console.log(req.body)
            res.send("<h1> Tamo junto! </h1>")
        })
    }
}

export default Usuarios