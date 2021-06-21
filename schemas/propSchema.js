const mongoose = require('mongoose');

const propSchema = mongoose.Schema(
	{
		nombre: String,
		apellido: String,
		autos: Array,
	},
	{
		versionKey: false, // Quita el __v de mongoDB
	}
);

module.exports = propSchema;
