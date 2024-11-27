const Livro = require('../models/Livro');
const Emprestimo = require('../models/Emprestimo');
const Usuario = require('../models/Usuario');
const sequelize = require('../config/database');

exports.livrosMaisEmprestados = async (req, res) => {
    try {
      // Consulta os livros mais emprestados
      const livrosMaisEmprestados = await Livro.findAll({
        attributes: [
          'id',
          'titulo',
          // Calcula a quantidade de empréstimos por livro
          [sequelize.fn('COUNT', sequelize.col('emprestimos.id')), 'quantidadeEmprestimos'],
        ],
        // Faz o JOIN com a tabela Emprestimos
        include: [
          {
            model: Emprestimo, // Relacionamento definido no modelo
            as: 'emprestimos', // Alias correto usado no modelo
            attributes: [], // Não buscamos colunas específicas de Emprestimos, apenas os dados para cálculo
          },
        ],
        group: ['Livro.id'], // Agrupa por id do livro
        order: [[sequelize.fn('COUNT', sequelize.col('emprestimos.id')), 'DESC']], // Ordena pela quantidade de empréstimos (decrescente)
      });
  
      // Caso não existam livros emprestados
      if (!livrosMaisEmprestados || livrosMaisEmprestados.length === 0) {
        return res.status(404).json({ message: 'Nenhum empréstimo encontrado.' });
      }
  
      // Retorna os dados
      res.status(200).json(livrosMaisEmprestados);
    } catch (error) {
      console.error('Erro ao buscar livros mais emprestados:', error);
      res.status(500).json({ error: 'Erro ao gerar relatório.' });
    }
  };

//usuários com empréstimos pendentes
exports.usuariosComEmprestimosPendentes = async(req, res) =>{
    try{
        const usuarios = await Usuario.findAll({
            attributes: [
                'id',
                'nome',
                'email'
            ],
            include: {
                model: Emprestimo,
                as: 'emprestimos',
                required: true,
                where: { devolvido: false },
            },
        });

        res.status(200).json(usuarios);
    } catch(err){
        res.status(500).json({ error: 'Erro ao gerar relatório de usuários com empréstimos pendentes' });
        console.error(err);
    }
};
