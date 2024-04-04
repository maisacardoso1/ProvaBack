import express from 'express';
import sql from 'mssql';
import { sqlConfig } from './server.js';

const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();
export const routes = express.Router()

routes.get('/', async (req, res)=>{
    try{
        const { recordset } = await pool.query`select * from agenda`
        return res.status(201).json(recordset)
    }
    catch(error){
        return res.status(501).json('Erro!')
    }
})

routes.post('/agendamento/novo', async (req, res)=>{
    try{
        const { Lugare, data_agenda, hora_agenda, motivo } = req.body
        await pool.query`insert into agenda values(${Lugare}, ${data_agenda}, ${hora_agenda}, ${motivo} )`
        return res.status(201).json('Novo adicionado!')
    }
    catch(error){
        return res.status(501).json('Erro!')
    }
})

routes.delete('/agendamento/excluir/:ID', async (req, res)=>{
    try{
        const { ID } = req.params
        await pool.query`delete from agenda where ID = ${ID}`
        return res.status(201).json('Deletado!')
    }
    catch(error){
        console.log(error)
        return res.status(501).json('Erro!');
    }
})

export default routes