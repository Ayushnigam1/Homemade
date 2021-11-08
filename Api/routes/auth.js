const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const { MongoClient } = require('mongodb');

const uri =
    "mongodb+srv://mongo:mongo@cluster0.qmfui.mongodb.net/homemade?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


//ROUTE:1    create a user using POST "/api/auth"
router.post("/", [
    body('name', 'please enter the valid name whose size at least 3').isLength({ min: 3 }),
    body('email', 'please enter the valid email must contain @').isEmail(),
    body('pasward', "It's size must be at least 5").isLength({ min: 5 }),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        pasward: req.body.pasward,
    }).then(client.connect((err) => {
        const collection = client.db("homemade").collection("user");
        // user => res.json(user)
        collection.insertOne(req.body)
    }));
    // client.connect((err) => {
    // 	const collection = client.db("homemade").collection("user");
    // 	const user = User(req.body);
    // collection.insertOne(req.body)
    //   user.save(()=>{collection.insertOne(req.body);});
    // });
    console.log(req.body);
    // res.json(req.body);
});

module.exports = router;