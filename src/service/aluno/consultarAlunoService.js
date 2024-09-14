import { consultarAluno } from "../../repository/alunoRepository.js";

export default async function consultarAlunoService(){

    let registros = await consultarAluno();

    return registros;
    
}