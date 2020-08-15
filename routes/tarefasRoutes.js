
module.exports = function(app){
	const tarefasLista = require('../controllers/tarefasControllers')

	app.route('/tarefas')
	.get(tarefasLista.listar_tarefa)
	.post(tarefasLista.criar_tarefa)

	app.route('/tarefas/:tarefasId')
		.get(tarefasLista.ler_tarefa)
		.put(tarefasLista.atualizar_tarefa)
		.delete(tarefasLista.deletar_tarefa)
}