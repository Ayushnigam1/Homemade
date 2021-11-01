const express = require('express');
const app = express();
const port= 5000;
app.get('/', function (req, res) {
  res.send('hello world')
})
app.get('/about', function (req, res) {
  res.send('hello about world')
})

app.listen(port,()=>{
  console.log(`listening to the port at ${port} `);
})