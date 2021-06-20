const AutoModel = require('../models/AutoModel');

// Mostrar registro
const showAll = async (req, res) => {
	const autos = await AutoModel.find();
	// console.log(autos);

	res.json({
		ok: true,
		autos,
	});
};

// Crear registro
const create = async (req, res) => {
	try {
		const { marca, modelo, año, patente, color } = await req.body;
		const auto = new AutoModel({
			marca,
			modelo,
			año,
			patente,
			color,
		});

		const resultado = await auto.save();
		console.log(resultado);

		res.json({
			ok: true,
			resultado,
		});
	} catch (error) {
		console.log(`HA HABIDO UN ERROR ${error}`);
	}
};

// Actualizar registro
const update = async id => {
	const auto = await AutoModel.updateOne(
		{ _id: id },
		{
			$set: {
				patente: 'BMX 444',
			},
		}
	);
};

// Borrar registro
const del = async id => {
	const auto = await AutoModel.deleteOne({ _id: id });
	console.log(auto);
};

module.exports = {
	showAll,
	create,
	update,
	del,
};
