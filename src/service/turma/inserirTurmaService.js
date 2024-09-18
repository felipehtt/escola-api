import { inserirTurma } from '../../repository/turmaRepository.js'

export default async function inserirTurmaService(turma){

    let id = await inserirTurma(turma)

    return id;
    
}