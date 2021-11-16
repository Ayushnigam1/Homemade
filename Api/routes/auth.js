const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
// const { MongoClient } = require("mongodb");

// const uri =
//     "mongodb+srv://mongo:mongo@cluster0.qmfui.mongodb.net/homemade?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

//ROUTE:1    create a user using POST "/api/auth"
router.post(
    "/createUser", [
        body("Name", "please enter the valid name whose size at least 3").isLength({
            min: 3,
        }),
        body("Email", "please enter the valid email must contai @").isEmail(),
        body("Pasward", "It's size must be at least 5").isLength({ min: 5 }),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        // if there are errors exist,return bad request.........
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // Check whether user with same email address exist already or not
            let user = await User.findOne({ Email: req.body.Email });
            if (user) {
                return res.status(400).json({ error: "sorry the user of this email has already exists" });
            }
            // make more secure your pasward
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.Pasward, salt);
            // create a new user
            user = await User.create({
                Name: req.body.Name,
                Pasward: secPass,
                Email: req.body.Email,
            })
            res.sendStatus(200);

        } catch (error) {
            console.error(error.message);
            res.status(500).send("some error occured");
        }


    }

);

module.exports = router;
// for trial run.....................

// console.log(req.body);
// const user = User(req.body);
// user.save().then(() => {
//     console.log("User added");
// });

// res.send(req.body);