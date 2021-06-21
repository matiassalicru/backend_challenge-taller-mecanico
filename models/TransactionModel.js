const transactionSchema = require('../schemas/transactionSchema');
const mongoose = require('mongoose');

const TransactionModel = mongoose.model('Transactions', transactionSchema);

module.exports = TransactionModel;
