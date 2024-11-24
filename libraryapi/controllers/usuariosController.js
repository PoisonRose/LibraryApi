const Usuario = require('../models/Usuario');

//CREATE/POST: criar novo usuário.
exports.criarUsuario = async(req, res) => {
    try{
        const novoUsuario = await Usuario.create(req.body);
        res.status(201).json(novoUsuario);
    } catch(err){
        res.status(500).json({ error: 'Erro ao criar usuario.' });
        console.log(err.message);
    }
};

//READ/GET: lista todos os usuários.
exports.listarUsuarios = async(req, res) =>{
    try{
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch(err){
        res.status(500).json({ error: 'Erro ao buscar usuários.' });
        console.log(err.message);
    }
};

//READ/GET: lê usuário especificado.
exports.buscarUsuario = async(req, res) =>{
    try{
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario){
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }
        res.json(usuario);
    } catch(err){
        res.status(500).json({ error: 'Erro ao buscar usuário.' });
        console.log(err.message);
    }
};

//UPDATE/PUT: atualiza usuário especificado.
exports.atualizarUsuario = async(req, res) =>{
    try{
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario){
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }
        await usuario.update(req.body);
        res.json(usuario);
    } catch(err){
        res.status(500).json({ error: 'Erro ao atualizar usuário.' });
        console.log(err.message);
    }
};

//DELETE: deleta usuário especificado.
exports.deletarUsuario = async(req, res) =>{
    try{
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario){
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }
        await usuario.destroy();
        res.json({ message: 'Usuário excluído com sucesso' });
    } catch(err){
        res.status(500).json({ error: 'Erro ao excluir usuário.' });
        console.log(err.message);
    }
};