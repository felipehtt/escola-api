import { buscarTurmaAno } from "../../repository/turmaRepository.js";

export default async function buscarTurmaAnoService(ano) {

    let registros = await buscarTurmaAno(ano)

    let filme = registros[0];

    return filme;

}