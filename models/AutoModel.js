const autoSchema = require('../schemas/autoSchema');
const mongoose = require('mongoose');

const AutoModel = mongoose.model('autos', autoSchema);

module.exports = AutoModel;
