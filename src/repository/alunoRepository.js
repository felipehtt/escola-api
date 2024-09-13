import con from './connection.js';

export async function inserirAluno(turma) {
    const comando = `


    `;

    let resposta = await con.query(comando, [turma.nome, turma.curso, turma.anoLetivo, turma.qtdCapacidade,
    turma.ativo, turma.dataInclusao])

    let info = resposta[0];

    return info.insertId;

};


export async function consultarTurma() {
    const comando = `
            select id_matricula_aluno  id,
               nm_turma          nome,
               ds_curso          curso,
               nr_ano_letivo     anoLetivo,
               qtd_capacidade   qtdCapacidade,
               bt_ativo          ativo,
            from tb_matricula_aluno
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;

};


export async function alterarTurma(id, turma) {
    const comando = `

        update tb_turma
        set nm_turma = ?, 
            ds_curso = ?, 
            nr_ano_letivo = ?, 
            qtd_capacidade = ?, 
            bt_ativo = ?, 
            dt_inclusao =?
        where id_turma = ?;

    `;

    let resposta = await con.query(comando, [turma.nome, turma.curso, turma.anoLetivo, turma.qtdCapacidade,
    turma.ativo, turma.dataInclusao, id])

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows

    return linhasAfetadas;

};


export async function removerTurma(id) {

    const comando = ` 
    
    delete from tb_turma 
      where id_turma = ?;
    
    `

    let resposta = await con.query(comando, [id])
    let info = resposta[0]

    let linhasAfetadas = info.affectedRows

    return linhasAfetadas;

}

