const mongoose = require("mongoose");

const ISIPostSchema = mongoose.Schema({
	measure: {
		type: String,
		require: true,
	},
	time_frame: {
		type: String,
		require: true,
	},
	questions: [{
		question: {
			type: String,
			require: true
		},
		answer: {
			type: Number,
			require: true
		}
	}],
	total: {
		type: Number,
		require: false,
	},
	category: {
		type: String,
		require: false,
	},
	timestamps: {
		type: Date,
		default: Date.now
	}

});

module.exports = mongoose.model("Post", ISIPostSchema, "isi");