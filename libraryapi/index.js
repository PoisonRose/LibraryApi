const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

//importação de modelos
const { Usuario, Livro, Emprestimo } = require('./models/associations');

//importação de rotas
const usuariosRoutes = require('./routes/usuariosRoutes');
const livrosRoutes = require('./routes/LivrosRoutes');
const emprestimosRoutes = require('./routes/emprestimosRoutes');
const relatoriosRoutes = require('./routes/relatoriosRoutes');

const PORT = process.env.PORT || 3000;

const app = express();

//middleware para json
app.use(express.json());

//rotas
app.use('/usuarios', usuariosRoutes);
app.use('/livros', livrosRoutes);
app.use('/emprestimos', emprestimosRoutes);
app.use('/relatorios', relatoriosRoutes);

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