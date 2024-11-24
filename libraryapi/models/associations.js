const Usuario = require('./Usuario');
const Livro = require('./Livro');
const Emprestimo = require('./Emprestimo');

// Associações
Usuario.hasMany(Emprestimo, { foreignKey: 'usuarioId', as: 'emprestimos' });
Emprestimo.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

Livro.hasMany(Emprestimo, { foreignKey: 'livroId', as: 'emprestimos' });
Emprestimo.belongsTo(Livro, { foreignKey: 'livroId', as: 'livro' });

module.exports = { Usuario, Livro, Emprestimo };
