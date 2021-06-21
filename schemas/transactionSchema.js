const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema(
	{
		nombre: String,
		costo: Number,
	},
	{
		versionKey: false, // Quita el __v de mongoDB
	}
);

module.exports = transactionSchema;
