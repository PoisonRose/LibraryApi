const Emprestimo = require('../models/Emprestimo');
const Livro = require('../models/Livro');
const Usuario = require('../models/Usuario');

//POST: registrar novo empréstimo
exports.registrarEmprestimo = async(req, res) =>{
    try{
        const { usuarioId, livroId } = req.body;

        //Verifica se o usuário não excedeu o limite(3) de empréstimos.
        const emprestimosAtivos = await Emprestimo.count({
            where: { usuarioId, devolvido: false },
        });

        if (emprestimosAtivos>=3){
            return res.status(400).json({ error: 'Usuário atingiu o limite de empréstimos' });
        }

        //Criar o empréstimo
        const emprestimo = await Emprestimo.create({ usuarioId, livroId });
        res.status(201).json({ message: 'Empréstimo registrado com sucesso!', emprestimo });
    } catch(err){
        res.status(500).json({ error: 'Erro ao registrar empréstimo' });
        console.error(error);
    }
};

//PUT: registrar devolução
exports.registrarDevolucao = async(req, res) =>{
    try{
        const { id } = req.params;

        const emprestimo = await Emprestimo.findByPk(id);
        if(!emprestimo){
            return res.status(404).json({ error: 'Empréstimo não encontrado' });
        }

        //Atualizar status do empréstimo para devolvido.
        emprestimo.devolvido = true;
        emprestimo.dataDevolucao = new Date();
        await emprestimo.save();

        res.json({message: 'Livro devolvido com sucesso!', emprestimo});
    } catch(err){
        res.status(500).json({ error: 'Erro ao registrar devolução' });
        console.error(error);
    }
};

//GET: listar empréstimos pendentes de um usuário especificado
exports.listarPendentes = async(req, res) =>{
    try{
        const { usuarioId } = req.params;

        const emprestimosPendentes = await Emprestimo.findAll({
            where: { usuarioId, devolvido: false },
            include: [
                { model: Usuario, as: 'usuario' },
                { model: Livro, as: 'livro' },
            ],
        });

        res.json(emprestimosPendentes);

    } catch(err){
        res.status(500).json({ error: 'Erro ao buscar empréstimos pendentes' });
        console.error(error);
    }
};