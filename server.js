const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { port, mongoURI } = require("./config");
const trnasactionRoutes = require("./routes/transactionRouter");
const authRoutes = require("./routes/auth")
const cors = require("cors");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const User = require("./models/User");

app.use(cors());
app.use(bodyparser.json());
app.use(morgan("tiny"));

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		//useFindAndModify: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("database is connected");
	})
	.catch((err) => {
		console.log(err);
	});
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({
			mongoUrl:
				"mongodb+srv://krishnaamen:Anita.sanima123@cluster0.7w1bz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", //(URI FROM.env file)
		}),
		//stroed it in database
	})
);
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/transactions", trnasactionRoutes);
app.use("/api/auth",authRoutes)
app.get("/", (req, res) => {
	res.send("Hello there");
});

if (process.env.NODE_ENV == "production") {
	app.use(express.static("client/public"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
	});
}
app.listen(port, () => console.log("express is running at port " + port));
