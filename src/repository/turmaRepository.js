import con from './connection.js';

export async function inserirTurma(turma) {
    const comando = `
        insert into tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao) 
	    values (?, ?, ?, ?, ?, ?)
    `;

    let resposta = await con.query(comando, [turma.nome, turma.curso, turma.anoLetivo, turma.qtdCapacidade,
    turma.ativo, turma.dataInclusao])

    let info = resposta[0];

    return info.insertId;

};


export async function consultarTurma() {
    const comando = `
            select id_turma id,
               nm_turma          nome,
               ds_curso          curso,
               nr_ano_letivo     anoLetivo,
               qtd_capacidade    qtdCapacidade,
               bt_ativo          ativo,
               dt_inclusao       dataInclusao 
            from tb_turma
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


export async function buscarTurmaAno(ano) {

    const comando = `

        select id_turma id,
               nm_turma          nome,
               ds_curso          curso,
               nr_ano_letivo     anoLetivo,
               qtd_capacidade   qtdCapacidade,
               bt_ativo          ativo,
               dt_inclusao       dataInclusao 
        from tb_turma
        where nr_ano_letivo = ?
    
    `

    let resposta = await con.query(comando, [ano])
    let registros = resposta[0]

    return registros;
    
}


export async function buscarTurmaAnoECurso(ano, curso) {

    const comando = ` 
     
        select id_turma id,
               nm_turma          nome,
               ds_curso          curso,
               nr_ano_letivo     anoLetivo,
               qtd_capacidade   qtdCapacidade,
               bt_ativo          ativo,
               dt_inclusao       dataInclusao 
        from tb_turma
        where nr_ano_letivo = ? and ds_curso = ?
    
    `

    let resposta = await con.query(comando, [ano, curso])
    let registros = resposta[0]

    return registros;
    
}