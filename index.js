const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* app.get("/", function (req, res) {
  res.send("hello world");
}); */

app.get('/', (req, res) => {

  const store = {
    product: 'Patol',
    price: 50
  }

    res.send(store);
});

/* app.get('/product/item', (req, res) => {
  res.send({ name: 'Egg', quantity: 50, price: 50000 })
}); */

const users = ['Md', 'Iffat', 'Bari', 'Bappy']

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({id, name});
});

app.post('/addUser', (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => console.log('listening port 3000') )