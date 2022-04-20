// import Validacoes from "../services/Validacoes.js"
// import Database from "../infra/Database.js"
// import UsuariosModel from "../models/UsuariosModel.js"
// import DatabaseMetodos from "../utils/DatabaseMetodos.js"

// class Usuarios{
//     static routers(app){
        
//         app.get("/usuarios", (req, res)=>{
//             if(Validacoes.validaNome("Diego")){
//                 res.send(Database)
//             } else {
//                 res.send("<h1>Deu Ruim!</h1>")
//             }
//         })

//         app.get("/usuarios/:id", (req, res) => {
//             // const id = req.params.id
//             // const obj = Database[id]
//             // console.log(Object.entries(obj))
//             res.status(200).json(obj.nome)
//         })

//         app.post("/usuarios", (req, res) =>{
//             // const usuario = new UsuariosModel(...Object.values(req.body))
//             // const resposta = DatabaseMetodos.iserir(usuario, Database)
//             res.status(201).json(resposta)
//         })
//         app.put("/usuarios/:id", (req, res) => {
//             res.status(200).json({resposta: "fiz um put"})
//         })
//         app.patch("/usuarios/:id", (req, res) => {
//             res.status(200).json({resposta: "fiz um put"})
//         })
//     }
// }

// export default Usuarios

