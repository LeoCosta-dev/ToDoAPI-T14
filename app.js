import express from "express";
import * as dotenv from "dotenv";
import Usuarios from "./src/controllers/Usuarios.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())


app.listen(port, ()=>{
    console.log(`Servidor em http://localhost:${port}`)
})


Usuarios.routers(app)
