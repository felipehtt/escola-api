import * as db from '../repository/turmaRepository.js'

import { Router } from 'express';
const endpoints = Router();


endpoints.post('/turma', async (req, resp) => {

    try {

        let turma = req.body;

        let id = await db.inserirTurma(turma)

        resp.send({

            idTurma: id

        })

    }
    catch (err) {

        resp.status(400).send({

            erro: err.message

            
        })

    }

});

endpoints.get('/turma', async (req, resp) => {
    try {

        let registros = await db.consultarTurma();

        resp.send(registros);

    } catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }
});

endpoints.put('/turma/:id', async (req, resp) => {
    try {

        let id = req.params.id;

        let turma = req.body;

        let linhasAfetadas = await db.alterarTurma(id, turma)

        if (linhasAfetadas >= 1) {

            resp.send();

        }
        else {

            resp.status(404).send({ erro: `Nenhum registro alterado.` })

        }

    }
    catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }

})

endpoints.delete('/turma/:id', async (req, resp) => {
    try {

        let id = req.params.id;

        let linhasAfetadas = await db.removerTurma(id)

        if (linhasAfetadas >= 1) {
            resp.send()
        }
        else {
            resp.status(404).send({ erro: `Nenhum registro removido.` })
        }

    } catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }
})


//extras
endpoints.get('/turma/busca/ano', async (req, resp) => {
    try {

        let ano = req.query.ano;

        let registros = await db.buscarTurmaAno(ano)

        resp.send(registros);

    } catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }

});

endpoints.get('/turma/:ano/curso', async (req, resp) => {
    try {

        let ano = req.params.ano
        
        let curso = req.query.curso


        let registros = await db.buscarTurmaAnoECurso(ano, curso);

        resp.send(registros);

    } catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }
});

export default endpoints;