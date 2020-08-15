
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TarefasSchema = new Schema({

	descricao:{
		type: String,
		require: 'Digite a descricao da tarefa!'
	},

	data:{
		type: Date,
		default: Date.now
	},

	status:{
		type:[{
			type: String,
			enum: ['pendente' , 'ongoing', 'completo']
		}],

		default: ['pendente']
	}
})

module.exports = mongoose.model('Tarefas', TarefasSchema);