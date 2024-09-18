import inserirAlunoService from '../service/aluno/inserirAlunoService.js';
import consultarAlunoService from '../service/aluno/consultarAlunoService.js';
import alterarAlunoService from '../service/aluno/alterarAlunoService.js';
import removerAlunoService from '../service/aluno/removerAlunoService.js';
import buscarAlunoAnoTurmaAtivoService  from '../service/aluno/buscarAlunoAnoTurmaAtivoService.js';
//import * as db from '../repository/alunoRepository.js'

import { Router } from 'express';
const endpoints = Router();

endpoints.post('/aluno', async (req, resp) => {

    try {

        let aluno = req.body;

        let id = await inserirAlunoService(aluno)

        resp.send({

            idAluno: id

        })

    }
    catch(err) {

        resp.status(400).send({
            erro: err.message
        })

    }

});


endpoints.get('/aluno', async (req, resp) => {
    try {

        let registros = await consultarAlunoService();

        resp.send(registros);

    } 
    catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }

});


endpoints.put('/aluno/:id', async (req, resp) => {
    try {

        let id = req.params.id;

        let aluno = req.body;

        let linhasAfetadas = await alterarAlunoService(id, aluno)

        if (linhasAfetadas >= 1) {

            resp.send();

        }
        else {

            resp.status(404).send({ erro: `Nenhum aluno alterado.` })

        }

    }
    catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.delete('/aluno/:id', async (req, resp) => {
    
    try {

        let id = req.params.id;

        let linhasAfetadas = await removerAlunoService(id)

        if (linhasAfetadas >= 1) {

            resp.send()

        }
        else {
            resp.status(404).send({ erro: `Nenhum aluno removido.` })
        }

    } catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }

})


//Extra
endpoints.get('/aluno/busca', async (req, resp) => {

    try {

        let ano = req.query.ano;
        let turma = req.query.turma;
        let alunoAtivo = req.query.alunoAtivo;

        let registros = await buscarAlunoAnoTurmaAtivoService(ano, turma, alunoAtivo)

        resp.send(registros);

    } catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }

})


export default endpoints;