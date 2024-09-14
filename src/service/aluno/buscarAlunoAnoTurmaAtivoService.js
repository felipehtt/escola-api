import { buscarAlunoAnoTurmaAtivo } from "../../repository/alunoRepository.js";

export default async function buscarAlunoAnoTurmaAtivoService(ano, turma, ativo){

    let registros = await buscarAlunoAnoTurmaAtivo(ano, turma, ativo)

    return registros;
    
}