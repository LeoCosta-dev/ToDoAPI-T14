import DatabaseMetodos from "../utils/DatabaseMetodos.js";

try {
    const table = await DatabaseMetodos.createTable()
    console.log(table)
    await DatabaseMetodos.popular(
        {
            id: 3, 
            nome:"José das Couves", 
            email:"couve@mineira.com",
            telefone: 21777777777
        })    
} catch (e) {
    console.log(e.message)
}
