import DatabaseMetodos from "../utils/DatabaseMetodos.js";

const table = await DatabaseMetodos.createTable()

await DatabaseMetodos.popular(
    {
        id: 1, 
        nome:"José", 
        sobrenome: "das Couves", 
        email:"couve@mineira.com"
    })

console.log(table)