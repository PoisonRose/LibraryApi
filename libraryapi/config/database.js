const { Sequelize } = require('sequelize'); //note que Sequelize está escrito em maiúsculo, isso porque é uma classe.
const dbConfig = require('./dbConfig');

//instância sequelize
const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        port: dbConfig.port,
        logging: false
    }
);

//teste de conexão
sequelize
.authenticate()
.then(() => {
    console.log('Conexão com o banco de dados bem sucedida.');
})
.catch((err) =>{
    console.log('Ocorreu um erro na conexão com o banco de dados', err);
});

//exporta a conexão
module.exports = sequelize;
