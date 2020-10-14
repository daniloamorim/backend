import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

//  Rota = conjunto
//  Recurso = usuário

//  Método HTTP = GET, POST, PUT, DELETE
//  Parâmetros

// GET = Buscar uma informação (lista, item)
// POST = Criando uma informação
//  PUT = Editando uma informação
//  DELETE =  Excluindo uma informação

//  Query Params : http://localhost:3333/users?search=diego&page2
//  Route Params :  http://localhost:3333/users/1 (identificar um recurso)
//  Body :  http://localhost:3333/users (identificar um recurso)

app.get('/users', (request, response) => {
    return response.json({ message: 'Hello World' })
});

app.listen(3333);
