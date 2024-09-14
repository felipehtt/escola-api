import { alterarAluno } from "../../repository/alunoRepository.js";

export default async function alterarAlunoService(id, alunoObj){

    let linhasAfetadas = await alterarAluno(id, alunoObj)

    if(linhasAfetadas == 0){

        throw new Error('Nenhum aluno aletrado')

    }

    return linhasAfetadas;

}