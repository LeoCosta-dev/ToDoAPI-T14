import express from "express";
import * as dotenv from "dotenv";
// import Usuarios from "./src/controllers/Usuarios.js"
import DatabaseMetodos from "./src/utils/DatabaseMetodos.js";

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

DatabaseMetodos.createTable()
app.listen(port, ()=>{
    console.log(`Servidor em http://localhost:${port}`)
})


// Usuarios.routers(app)
