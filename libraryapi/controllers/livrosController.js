const Livro = require('../models/Livro');

//CREATE/POST: adicionar novo livro.
exports.adicionarLivro = async(req, res) => {
    try{
        const novoLivro = await Livro.create(req.body);
        res.status(201).json(novoLivro);
    } catch(err){
        res.status(500).json({ error: 'Erro ao adicionar novo livro.' });
        console.log(err.message);
    }
};

//READ/GET: listar todos os livros.
exports.listarLivros = async(req, res) =>{
    try{
        const livros = await Livro.findAll();
        res.status(200).json(livros);
    } catch(err){
        res.status(500).json({ error: 'Erro ao buscar livros.' });
        console.log(err.message);
    }
};

//READ/GET: buscar livro especificado.
exports.buscarLivro = async(req, res) =>{
    try{
        const livro = await Livro.findByPk(req.params.id);
        if (!livro){
            return res.status(404).json({ error: 'Livro não encontrado' });
        }
        res.json(livro);
    } catch(err){
        res.status(500).json({ error: 'Erro ao buscar livro.' });
        console.log(err.message);
    }
};

//UPDATE/PUT: atualiza livro especificado.
exports.editarLivro = async(req, res) =>{
    try{
        const livro = await Livro.findByPk(req.params.id);
        if (!livro){
            return res.status(404).json({ error: 'Livro não encontrado' });
        }
        await livro.update(req.body);
        res.json(livro);
    } catch(err){
        res.status(500).json({ error: 'Erro ao editar livro.' });
        console.log(err.message);
    }
};

//DELETE: deleta livro especificado.
exports.deletarLivro = async(req, res) =>{
    try{
        const livro = await Livro.findByPk(req.params.id);
        if (!livro){
            return res.status(404).json({ error: 'Livro não encontrado' });
        }
        await livro.destroy();
        res.json({ message: 'Livro excluído com sucesso!' });
    } catch(err){
        res.status(500).json({ error: 'Erro ao excluir livro.' });
        console.log(err.message);
    }
};