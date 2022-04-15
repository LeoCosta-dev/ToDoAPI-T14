class Validacoes{
    static validaNome(string){
        if(string.length >= 3){
            return true
        } else {
            return false
        }
    }
}

export default Validacoes;

// export function validaNome(string){
//     if(string.length >= 3){
//         return true
//     } else {
//         return false
//     }
// }

// export function log(){
//     console.log("Passei aqui!")
// }