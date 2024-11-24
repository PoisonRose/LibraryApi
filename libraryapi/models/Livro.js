const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Emprestimo = require('./Emprestimo');

const Livro = sequelize.define('Livro', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genero: {
        type: DataTypes.STRING,
    },
    ano_publicacao: {
        type: DataTypes.INTEGER,
    },
}, {
    tableName: 'livros',
});

module.exports = Livro;