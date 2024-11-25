const express = require('express');
const router = express.Router();
const emprestimosController = require('../controllers/emprestimosController');

//Registrar novo empréstimo.
router.post('/', emprestimosController.registrarEmprestimo);

//Registrar devolução.
router.put('/:id/devolver', emprestimosController.registrarDevolucao);

//Listar empréstimos pendentes de um usuário especificado
router.get('/pendentes/:usuarioId', emprestimosController.listarPendentes);

module.exports = router;