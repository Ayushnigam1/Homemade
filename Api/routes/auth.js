const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const { MongoClient } = require("mongodb");

const uri =
    "mongodb+srv://mongo:mongo@cluster0.qmfui.mongodb.net/homemade?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//ROUTE:1    create a user using POST "/api/auth"
router.post(
    "/", [
        body("name", "please enter the valid name whose size at least 3").isLength({
            min: 3,
        }),
        body("email", "please enter the valid email must contain @").isEmail(),
        body("pasward", "It's size must be at least 5").isLength({ min: 5 }),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        client.connect((err) => {
            console.log("Connected to mongo..");
            const collection = client.db("homemade").collection("user");
            collection.insertOne(req.body).then(() => {
                console.log("User added");
            });
        });

        console.log(req.body);
        res.sendStatus(200);
    }
);

module.exports = router;