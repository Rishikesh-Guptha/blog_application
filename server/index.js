/** @format */
// Install express cors sequelize sequelize-cli
const express = require("express");
const app = express();
const db = require("./models");

db.sequelize.sync().then(() => {
	app.listen(3000, () => {
		console.log("This is running in 3000 port");
	});
});


