// class Validacoes{
//     static validaNome(string){
//         if(string.length >= 10){
//             return true
//         } else {
//             return false
//         }
//     }
// }

export function validaNome(string){
    if(string.length >= 3){
        return true
    } else {
        return false
    }
}

export function log(){
    console.log("Passei aqui!")
}