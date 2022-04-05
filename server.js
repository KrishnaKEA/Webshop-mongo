const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { port, mongoURI } = require("./config");
const trnasactionRoutes = require("./routes/transactionRouter");
const cors = require("cors");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const path = require("path")

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

app.use("/api/transactions", trnasactionRoutes);
app.get("/", (req, res) => {
	res.send("Hello there");
});

if(process.env.NODE_ENV =="production"){
	app.use(express.static('client/public'))
	app.get('*',(req,res)=>{
		res.sendFile(path.resolve(__dirname,'client','public','index.html'))
	})
}
app.listen(port, () => console.log("express is running at port " + port));
