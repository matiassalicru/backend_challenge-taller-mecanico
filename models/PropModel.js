const propSchema = require('../schemas/propSchema');
const mongoose = require('mongoose');

const PropModel = mongoose.model('props', propSchema);

module.exports = PropModel;
