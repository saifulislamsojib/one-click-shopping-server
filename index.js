const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello One Click Shopping!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});