const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Livro = require('./Livro');

const Emprestimo = sequelize.define('Emprestimo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dataEmprestimo: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    dataDevolucao: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    devolvido: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = Emprestimo;
