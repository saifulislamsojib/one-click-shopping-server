const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const admin = require("firebase-admin");
const configs = require("./configs/configs.js");

const app = express();

app.use(express.json());
app.use(cors());

admin.initializeApp({
  credential: admin.credential.cert(configs),
});

const port = process.env.PORT || 4000;

const db_name = process.env.DB_NAME;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ernz8.mongodb.net/${db_name}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

(async () => {
  try {
    const db = client.db(db_name);
    const productsCollection = db.collection("products");
    const ordersCollection = db.collection("orders");

    app.post("/addProduct", (req, res) => {
      const product = req.body;
      productsCollection.insertOne(product).then((result) => {
        res.send({
          inserted: result.insertedCount > 0,
          _id: result.insertedId,
        });
      });
    });

    app.get("/products", (req, res) => {
      const { search } = req.query;
      productsCollection
        .find({ name: { $regex: search, $options: "i" } })
        .toArray((err, documents) => {
          res.send(documents);
        });
    });

    app.get("/product/:id", (req, res) => {
      const { id } = req.params;
      productsCollection
        .find({ _id: ObjectId(id) })
        .toArray((err, documents) => {
          res.send(documents[0]);
        });
    });

    app.post("/user", (req, res) => {
      const bearer = req.headers.authorization;
      if (bearer && bearer.startsWith("Bearer ")) {
        const idToken = bearer.split(" ")[1];
        admin
          .auth()
          .verifyIdToken(idToken)
          .then((decodedToken) => {
            const { uid, name, picture, email } = decodedToken;
            res.send({ uid, name, photo: picture, email });
          })
          .catch((error) => {
            res.status(401).send({ message: "Unauthorized Access" });
          });
      } else {
        res.status(401).send({ message: "Unauthorized Access" });
      }
    });

    app.delete("/deleteProduct", (req, res) => {
      const product = req.body;
      productsCollection
        .deleteOne({ _id: ObjectId(product._id) })
        .then((result) => {
          res.send(result.deletedCount > 0);
        });
    });

    app.patch("/updateProduct/:id", (req, res) => {
      const product = req.body;
      const { id } = req.params;
      productsCollection
        .updateOne(
          { _id: ObjectId(id) },
          {
            $set: { ...product },
          }
        )
        .then((result) => {
          res.send(result.modifiedCount > 0);
        });
    });

    app.post("/checkoutOrder", (req, res) => {
      const orderedProduct = req.body;
      ordersCollection.insertOne(orderedProduct).then((result) => {
        res.send(result.insertedCount > 0);
      });
    });

    app.get("/orders", (req, res) => {
      const { email } = req.query;
      ordersCollection.find({ email }).toArray((err, documents) => {
        res.send(documents);
      });
    });

    app.get("/allOrders", (req, res) => {
      ordersCollection.find({}).toArray((err, documents) => {
        res.send(documents);
      });
    });
  } finally {
    // finally something
  }
})().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello One Click Shopping!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
