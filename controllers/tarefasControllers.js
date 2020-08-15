
var mongoose = require('mongoose')
const Tarefa = mongoose.model('Tarefas')

exports.listar_tarefa = function(req, res){
	Tarefa.find({}, function(err, tarefa){
		if(err)
			res.send(err);
		res.json(tarefa)
	})
}

exports.criar_tarefa = function(req, res) {
	const { descricao, status} = req.body
	let new_tarefa = new Tarefa({ descricao, status})
	new_tarefa.save((err, tarefa) =>{
		if (err) 
			res.send(err)
	res.json(tarefa)
	})
}

exports.ler_tarefa = function(req, res) {
	Tarefa.findById(req.params.tarefasId, function(err, task) {
		if(err)
			res.send(err)
		res.json(tarefa)
	})
}

exports.atualizar_tarefa = function(req, res) {
	Tarefa.findOneAndUpdate({_id: req.params.tarefasId},req.body,{new: true}, function(err, tarefa) {
		if (err) {
			res.send(err)
		}
		let message = { 
			message: 'Tarefa Atualizada!'
		}
		res.json(message)
	})
}

exports.deletar_tarefa = function(req, res) {
	Tarefa.remove({
		_id: req.params.tarefasId
	}, function(err, tarefa) {
		if(err){
			res.send(err)
		}
		let message = { 
			message: 'Tarefa Excluida Com Sucesso!'
		}
	res.json(message)

	})	
}