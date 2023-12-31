/** @format */

const express = require("express");
const router = express.Router();
const { Posts } = require("../models"); //This Post variable is the sql table -"posts" instance, so we can access the post table using this.

router.get("/", async (req, res) => {
	const allposts = await Posts.findAll();
	res.json(allposts);
});
router.post("/", async (req, res) => {
	const postdata = req.body;
	await Posts.create(postdata); //used to post (or) insert the data in the sql table-"posts"
	res.json(postdata);
});

module.exports = router;
