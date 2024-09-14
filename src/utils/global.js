import { horaAtual } from "./datetime.js";


global.logError = function logError(err){

    console.log(horaAtual() +  ' ERROR ----> ' + err.message);   

}


global.criarErro = function criarErro(err){

    let obj = {

        error: err.message

    }

    return obj;

}