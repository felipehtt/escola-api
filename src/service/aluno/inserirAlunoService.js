import { inserirAluno } from "../../repository/alunoRepository.js";

export default async function inserirAlunoService(alunoObj){

    let id = await inserirAluno(alunoObj)

    return id;

}