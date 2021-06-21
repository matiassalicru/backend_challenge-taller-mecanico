const mongoose = require('mongoose');

const autoSchema = mongoose.Schema(
	{
		marca: String,
		modelo: String,
		año: Number,
		patente: String,
		color: String,
		propietario: String,
		serviciosRealizados: Array,
	},
	{ versionKey: false } // Quita el __v de mongoDB
);

module.exports = autoSchema;
