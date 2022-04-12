import Validacoes from "../services/Validacoes.js"

class Usuarios{
    static routers(app){
        
        app.get("/", (req, res)=>{
            if(Validacoes.validaNome("Diego")){
                res.send("<h1>Funciona</h1>")
            } else {
                res.send("<h1>Deu Ruim!</h1>")
            }
        })
    }
}

export default Usuarios