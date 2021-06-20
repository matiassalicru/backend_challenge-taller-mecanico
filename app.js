const express = require('express');
const { dbConnection } = require('./db/dbConnection');
const app = express();
require('dotenv').config();

// Conexión a DATABASE.
dbConnection();

// Set port
app.set('port', process.env.PORT || 6000);

// Get test
app.get('/', (req, res) => {
	res.send('It works...');
});

// Routes
app.use('/car', require('./routes/getAllCars'));
app.use('/car', require('./routes/createCar'));
app.use('/car', require('./routes/updateCar'));
app.use('/car', require('./routes/deleteCar'));
//PROBAR UPDATE AND DELETE

// Server on
app.listen(app.get('port'), () => {
	console.log(`Server on port: ${process.env.PORT}`);
});
