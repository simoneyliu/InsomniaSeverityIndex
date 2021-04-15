// Imports
const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const port = 3000;

// Static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

app.get("", (request, respone) => {
	respone.sendFile(__dirname + "/views/index.html");
});

app.use(express.json());

// Import Routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);
app.get("/", (request, response) => {
	response.send("Home");
});

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
	console.log(`Listening on port ${port}`);
});