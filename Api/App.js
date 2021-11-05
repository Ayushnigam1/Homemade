const express = require('express');
const path = require('path');
const app = express();
const port= 5000;
const cors = require("cors")
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://mongo:mongo@cluster0.qmfui.mongodb.net/homemade?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("homemade").collection("user");
  // perform actions on the collection object
	collection.insertOne({
		user : "hello"
	}).catch(e => {
		console.log(err)
		console.log(e)
	})
});

app.use(cors())

app.use(express.static(path.join(__dirname, "..", "build")));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.get('/hello', (req, res) => {
  res.send('hello world')
  console.log("hello ");
})
// app.get('/about', function (req, res) {
//   res.sendFile(path.join(__dirname,'public','index.html'));
// })

app.listen(port,()=>{
  console.log(`listening to the port at ${port} `);
})
