const express = require("express");
const router = express.Router();
const User = require("../models/User");
const mongoose=require('mongoose');
const { MongoClient } = require('mongodb');

const uri =
	"mongodb+srv://mongo:mongo@cluster0.qmfui.mongodb.net/homemade?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});


//ROUTE:1    create a user using POST "/api/auth"
router.get("/",(req, res) => {
	const collection = client.db("homemade").collection("user");
	const user =User(req.body);
	collection.insertOne(user);
	console.log(req.body);
	res.json(req.body);
});

module.exports = router;
