require('dotenv').config();

const mongoose = require('mongoose');

const dbConnection = async () => {
	try {
		console.log('Intentando conectar db');

		await mongoose.connect(process.env.DB_CNN, {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});

		console.log('CONECTADO A MONGO.');
	} catch (error) {
		console.log('Wey Errasteee');
		throw new Error('Error a la hora de inicializar la DB');
	}
};

module.exports = { dbConnection };
