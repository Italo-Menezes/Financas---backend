const express = require('express');
const router = express();

/* controllers */
const Categorias= require('../controllers/Categorias');
const Financas = require('../controllers/Financas');

/* Categorias */
router.get('/categorias/listar/:page', Categorias.list);
router.post('/categorias/criar', Categorias.create);
router.put('/categorias/atualizar/:id', Categorias.update);
router.delete('/categorias/deletar/:id', Categorias.delete);

/* finanças */
router.get('/financas/listar/:page', Financas.list);
router.post('/financas/criar', Financas.create);
router.put('/financas/atualizar/:id', Financas.update);
router.delete('/financas/deletar/:id', Financas.delete);
router.get("/financas/dataInicial/:dataInicial/dataFinal/:dataFinal/page/:page", Financas.listDate);
router.get("/financas/pesquisar/categoria_id/:id", Financas.findbyid);
module.exports = router;
