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
		console.log(`HA HABIDO UN ERROR -> ${error}`);
	}
};

// Actualizar registro
const update = async (req, res) => {
	const { id, marca, modelo, año, patente, color } = req.body;

	try {
		const auto = await AutoModel.updateOne(
			{ _id: req.body.id }, // Tiene que venir el ID por el body.
			{
				$set: {
					marca,
					modelo,
					año,
					patente,
					color,
				},
			}
		);
	} catch (error) {
		console.log(`HUBO UN ERROR -> ${error}`);
	}
};

// Borrar registro
const deleteCar = async (req, res) => {
	try {
		const auto = await AutoModel.deleteOne({ _id: req.body.id });
		console.log(auto);
		res.json({
			ok: true,
			auto,
		});
	} catch (error) {
		console.log(`HUBO UN ERROR -> ${error}`);
	}
};

module.exports = {
	showAll,
	create,
	update,
	deleteCar,
};
