const express = require("express");
const Post = require("../models/Post");
const router = express.Router();
const Posts = require("../models/Post");
router.get("/", (request, response) => {
	response.send("POSTS");
});

router.post("/", async (request, response) => {
	const post = new Post({
		title: request.body.title,
		description: request.body.description,
	});

	try {
		const savedPost = await post.save();
		response.json(savedPost);
	} catch (error) {
		console.log("post error: ", error);
		response.json({
			message: error
		});
	}
});

module.exports = router;