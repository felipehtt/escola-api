import { removerAluno } from "../../repository/alunoRepository.js";

export default async function removerAlunoService(id){

    let linhasAfetadas = await removerAluno(id)

    if(linhasAfetadas == 0){

        throw new Error('Nenhum aluno removido.')

    }

    return linhasAfetadas;
    
}