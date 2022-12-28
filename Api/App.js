const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const cors = require("cors");
const connectToMongo = require("./db");

app.use(cors());
connectToMongo();
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.get('/hello', (req, res) => {
    res.send('hello world')
        // console.log("hello ");
})

app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log(`listening to the port at ${port} `);
})