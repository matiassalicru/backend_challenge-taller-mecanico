const PropModel = require('../models/PropModel');

// Mostrar registro
const showAll = async (req, res) => {
	try {
		const prop = await PropModel.findOne({ nombre: req.body.nombre });

		res.status(200).json({
			ok: true,
			prop,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: `Hubo un error en el servidor ${error}`,
		});
	}
};

// Crear registro
const create = async (req, res) => {
	try {
		const { nombre, apellido, autos = [] } = await req.body;

		const prop = new PropModel({
			nombre,
			apellido,
			autos,
		});

		const resultado = await prop.save();
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
	// Enviar por el front TODA la info actualizada aunque no se hayan realizado cambios.

	const { nombre, apellido, autos = [] } = req.body;

	try {
		const prop = await PropModel.updateOne(
			{ _id: id }, // Tiene que venir el ID por el body.
			{
				$set: {
					nombre,
					apellido,
					autos,
				},
			}
		);
		res.status(200).json({
			ok: true,
			msg: 'Información del propietario actualizada',
			prop,
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
const deleteProp = async (req, res) => {
	const { id } = req.body;

	console.log(req.body);

	try {
		const prop = await PropModel.deleteOne({ _id: id });
		console.log(prop);
		res.status(200).json({
			ok: true,
			prop,
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
	deleteProp,
};
