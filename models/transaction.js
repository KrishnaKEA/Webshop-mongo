const { text } = require("body-parser");
const { Schema, model } = require("mongoose");

const now = new Date().getTime();
const TransactionSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	value: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	imageString: {
		type: String,
		required: true,
	},

	date: {
		type: Number,
		default: now,
	},
});

const Transaction = model("transaction", TransactionSchema);

module.exports = Transaction;
