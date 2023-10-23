/** @format */
// Install express cors sequelize sequelize-cli
const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");

const PostRouter = require("./routes/Posts");
app.use(express.json());
app.use(cors());
//Routers- (what we name the url,location of the url file)
app.use("/posts", PostRouter);

db.sequelize.sync().then(() => {
	app.listen(7000, () => {
		console.log("This is running in 7000 port");
	});
});


