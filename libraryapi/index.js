const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

//importação de modelos
const Livro = require('./models/Livro');
const Usuario = require('./models/Usuario');

//importação de rotas
const usuariosRoutes = require('./routes/usuariosRoutes');
const livrosRoutes = require('./routes/LivrosRoutes');

const PORT = process.env.PORT || 3000;

const app = express();

//middleware para json
app.use(express.json());

//rotas
app.use('/usuarios', usuariosRoutes);
app.use('/livros', livrosRoutes);

//teste de conexão e sincronização de modelos
sequelize
.sync({ force: false })
.then(() =>{
    console.log('Modelos criados com sucesso!');
})
.catch((err) =>{
    console.log('Erro ao sincronizar modelos', err);
});

//Rota principal
app.get('/', (req, res) =>{
    res.send('API funcionando.');
});

//iniciar servidor
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`);
});