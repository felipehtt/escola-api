import con from './connection.js';

export async function inserirAluno(aluno) {
    const comando = `

    insert into tb_matricula_aluno (nm_aluno, ds_sexo, dt_nascimento, ds_email, bt_ativo, id_turma)
    values (?, ?, ?, ?, ?, ?)

    `;

    let resposta = await con.query(comando, [aluno.nomeAluno, aluno.sexo, aluno.nascimento, aluno.email, aluno.alunoAtivo, aluno.idTurma])

    let info = resposta[0];

    return info.insertId;

};


export async function consultarAluno() {
    const comando = `
            select id_matricula_aluno  id,
                   nm_aluno            nomeAluno, 
                   ds_sexo             sexo, 
                   dt_nascimento       nascimento, 
                   ds_email            email, 
                   bt_ativo            alunoAtivo
                from tb_matricula_aluno
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;

};


export async function alterarAluno(id, aluno) {
    const comando = `

        update tb_matricula_aluno
        set nm_aluno = ?,
            ds_sexo = ?,             
            dt_nascimento = ?,       
            ds_email = ?,           
            bt_ativo = ?            
        where id_matricula_aluno = ?

    `;

    let resposta = await con.query(comando, [aluno.nomeAluno, aluno.sexo, aluno.nascimento, aluno.email, 
    aluno.alunoAtivo, id])

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows

    return linhasAfetadas;

};


export async function removerAluno(id) {

    const comando = ` 
    
        delete from tb_matricula_aluno
        where id_matricula_aluno = ?
    
    `

    let resposta = await con.query(comando, [id])
    let info = resposta[0]

    let linhasAfetadas = info.affectedRows

    return linhasAfetadas;

}


export async function buscarAlunoAnoTurmaAtivo(ano, turma, ativo){

    const comando = ` 
    
    select
    tb_matricula_aluno.nm_aluno,
    tb_matricula_aluno.ds_sexo,
    tb_matricula_aluno.dt_nascimento,
    tb_matricula_aluno.ds_email,
    tb_matricula_aluno.bt_ativo,
    tb_matricula_aluno.id_turma,
    tb_turma.nm_turma
    from tb_matricula_aluno left join tb_turma
    on tb_matricula_aluno.id_turma = tb_turma.id_turma;

    `

    let resposta = await con.query(comando, [ano, turma, ativo])
    let registros = resposta[0]

    return registros;

}
