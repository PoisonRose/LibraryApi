const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

//criar usuário
router.post('/', usuariosController.criarUsuario);
//listar usuários
router.get('/', usuariosController.listarUsuarios);
//buscar usuário
router.get('/:id', usuariosController.buscarUsuario);
//atualizar usuário
router.put('/:id', usuariosController.atualizarUsuario);
//deletar usuário
router.delete('/:id', usuariosController.deletarUsuario);

module.exports = router;