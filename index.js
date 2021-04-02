const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello One Click Shopping!');
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ernz8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const productsCollection = client.db("one-click-shopping").collection("products");

  const ordersCollection = client.db("one-click-shopping").collection("orders");
  
  app.post('/addProduct', (req, res) => {
    const product = req.body;
    productsCollection.insertOne(product)
    .then(result => {
      res.send({inserted:result.insertedCount > 0, _id: result.insertedId});
    })
  });

  app.get("/products", (req, res) => {
    productsCollection.find({})
    .toArray((err, documents) => {
      res.send(documents)
    });
  });

  app.get("/product/:id", (req, res) => {
    const {id} = req.params;
    productsCollection.find({_id: ObjectId(id)})
    .toArray((err, documents) => {
      res.send(documents[0])
    });
  });

  app.delete('/deleteProduct', (req, res) => {
    const product = req.body;
    productsCollection.deleteOne({_id: ObjectId(product._id)})
    .then(result => {
      res.send(result.deletedCount > 0);
    })
  });

  app.patch('/updateProduct/:id', (req, res) => {
    const product = req.body;
    const {id} = req.params;
    productsCollection.updateOne(
      {_id: ObjectId(id)},
      {
        $set: {...product}
      }
      )
    .then(result => {
      res.send(result.modifiedCount > 0);
    })
  });

  app.post('/checkoutOrder', (req, res) => {
    const orderedProduct = req.body;
    ordersCollection.insertOne(orderedProduct)
    .then(result => {
      res.send(result.insertedCount > 0);
    })
  });

  app.get("/orders", (req, res) => {
    const {email} = req.query;
    ordersCollection.find({email})
    .toArray((err, documents) => {
      res.send(documents)
    });
  });

  app.get("/allOrders", (req, res) => {
    ordersCollection.find({})
    .toArray((err, documents) => {
      res.send(documents)
    });
  });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});