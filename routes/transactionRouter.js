const { Router } = require("express");
const Transaction = require("../models/Transaction");
const user = require("../models/User")
/*
async function getuser(){
	const user =  await import('../client/src/stores.js')
	return user;
}
*/


const router = Router();

function checkLogin(req, res, next) {
	
	if (!req.isAuthenticated()) {
		return res.status(401).send({ message: "Not authenticated" });
	}

	next();
}



router.get("/", async (req, res) => {
	try {
		const transactions = await Transaction.find();
		if (!transactions) {
			throw new Error("No transactions");
		}
		res.status(200).json(transactions);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});



router.get("/getall", checkLogin, async (req, res) => {
	try {
		const transactions = await Transaction.find({
			user_id: req.user._id,
		}).exec();
		if (!transactions) {
			throw new Error("No transactions");
		}
		res.status(200).json(transactions);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.post("/", checkLogin, async (req, res) => {
	const { name, value, description, imageString, date } = req.body;
	const newTransaction = new Transaction({
		name,
		value,
		description,
		imageString,
		date,
		user_id: req.user._id,
	});

	try {
		const transaction = await newTransaction.save();
		if (!transaction) {
			throw new Error("There was an error saving the transaction");
		}
		res.status(200).json(transaction);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.delete("/:id", checkLogin, async (req, res) => {
	const { id } = req.params;
	try {
		const transaction = await Transaction.findById(id);
		if (!transaction) {
			throw new Error("No transaction was found");
		}
        if(transaction.user_id !== String(req.user._id)){
            return res.status(403).json({message: 'Unauthorized'})
        }
		const removed = await transaction.remove();

		if (!removed) {
			throw new Error("There was a problem deleting the transaction");
		}
		res.status(200).json({ id });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

module.exports = router;
