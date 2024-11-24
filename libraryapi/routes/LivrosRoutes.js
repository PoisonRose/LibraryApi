const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController');

//criar livro
router.post('/', livrosController.adicionarLivro);
//listar livros
router.get('/', livrosController.listarLivros);
//buscar livro
router.get('/:id', livrosController.buscarLivro);
//atualizar livro
router.put('/:id', livrosController.editarLivro);
//deletar livro
router.delete('/:id', livrosController.deletarLivro);

module.exports = router;