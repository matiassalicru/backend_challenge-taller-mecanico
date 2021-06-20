const mongoose = require('mongoose');

const autoSchema = mongoose.Schema(
	{
		marca: String,
		modelo: String,
		año: Number,
		patente: String,
		color: String,
	},
	{ versionKey: false }
);

module.exports = autoSchema;
