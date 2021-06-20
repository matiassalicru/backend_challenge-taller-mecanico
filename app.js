const mongoose = require('mongoose');
const AutoModel = require('./models/AutoModel');
require('dotenv').config();

const url = `mongodb+srv://matiassalicru:${process.env.DB_PASS}@cluster0.7ys3p.mongodb.net/taller_db`;

mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => console.log('Conectado a MONGO'))
	.catch(e => console.log(e));

// Mostrar
const mostrar = async () => {
	const autos = await AutoModel.find();
	console.log(autos);
};

// Crear
const crear = async () => {
	const auto = new AutoModel({
		marca: 'Audi',
		modelo: 'TT',
		año: 2010,
		patente: 'BMX 111',
		color: 'Negro',
	});

	const resultado = await auto.save();
	console.log(resultado);
};

const actualizar = async id => {
	const auto = await AutoModel.updateOne(
		{ _id: id },
		{
			$set: {
				patente: 'BMX 444',
			},
		}
	);
};

const eliminar = async id => {
	const auto = await AutoModel.deleteOne({ _id: id });
	console.log(auto);
};

// mostrar();
// crear();
// actualizar('60cf5eafb5171e3c3e432f28');
// eliminar('60cf5e9402a9ea3c16447800'); //This ID doesnot exists
