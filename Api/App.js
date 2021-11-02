const express = require('express');
const path = require('path');
const app = express();
const port= 5000;
const cors = require("cors")

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
