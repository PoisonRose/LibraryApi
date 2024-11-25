const express = require('express');
const { livrosMaisEmprestados, usuariosComEmprestimosPendentes } = require('../controllers/relatoriosController');
const router = express.Router();

//livros mais emprestados
router.get('/livros-mais-emprestados', livrosMaisEmprestados);

//usuários com empréstimos pendentes
router.get('/usuarios-com-emprestimos-pendentes', usuariosComEmprestimosPendentes);

module.exports = router;