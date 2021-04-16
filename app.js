// Imports
const express = require("express");
const mongoose = require("mongoose");
var multer = require('multer');
var upload = multer();
require("dotenv/config");
const app = express();
const port = 3000;

// Load assets
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({
	extended: true
}));

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));


// Import Routes
app.use("/", require("./routes/router"));


// Connect to DB
mongoose.connect(
	process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	() => {
		console.log("Database is connected");
	}
);

// Listening to the server
app.listen(port, () => {
	console.log(`Listening on port http://localhost:${port}`);
});