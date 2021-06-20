const AutoModel = require('../models/AutoModel');

// Mostrar registro
const showAll = async (req, res) => {
	const autos = await AutoModel.find();
	// console.log(autos);

	res.status(200).json({
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

		res.status(200).json({
			ok: true,
			resultado,
		});
	} catch (error) {
		console.log(`HA HABIDO UN ERROR -> ${error}`);

		res.status(500).json({
			ok: false,
			msg: 'Error en el servidor...',
			error,
		});
	}
};

// Actualizar registro
const update = async (req, res) => {
	const { id, marca, modelo, año, patente, color } = req.body;

	try {
		const auto = await AutoModel.updateOne(
			{ _id: id }, // Tiene que venir el ID por el body.
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
		res.status(200).json({
			ok: true,
			msg: 'Información del auto actualizada',
			auto,
		});
	} catch (error) {
		console.log(`HUBO UN ERROR -> ${error}`);

		res.status(500).json({
			ok: false,
			msg: 'Error en el servidor...',
			error,
		});
	}
};

// Borrar registro
const deleteCar = async (req, res) => {
	const { id } = req.body;

	console.log(req.body);

	try {
		const auto = await AutoModel.deleteOne({ _id: id });
		console.log(auto);
		res.status(200).json({
			ok: true,
			auto,
		});
	} catch (error) {
		console.log(`HUBO UN ERROR -> ${error}`);

		res.status(500).json({
			ok: false,
			msg: 'Error en el servidor...',
			error,
		});
	}
};

module.exports = {
	showAll,
	create,
	update,
	deleteCar,
};
