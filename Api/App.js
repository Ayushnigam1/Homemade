const express = require('express');
const path = require('path');
const app = express();
const port= 5000;
const cors = require("cors")
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ashwin:<ashwin>@cluster0.qmfui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
	console.log(collection)
  client.close();
});

app.use(cors())
app.use(express.static(path.join(__dirname, "..", "build")));
// app.use(express.static(path.join(__dirname, "../public")));
// console.log(path.join(__dirname, "..", "build"));
// app.use(express.static(path.join(__dirname,"public")));
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
