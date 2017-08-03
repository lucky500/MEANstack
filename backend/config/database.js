const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost/db_finance');

mongoose.Error.messages.general.required = "the atribute '{PATH}' is mandatory";
mongoose.Error.messages.Number.min = "the '{VALUE}' informed is smaller than the minimum limit of '{MIN}'.";
mongoose.Error.messages.Number.max = "the '{VALUE}' informed is bigger than the maximum limit of '{MAX}'.";
