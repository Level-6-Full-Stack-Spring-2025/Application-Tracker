const cors = require('cors');
const express = require('express');
const { connectMongoose } = require('./connect');
const Listing = require('./models/Listing');

const port = process.env.PORT || 3002;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/jobs', async (req, res) => {
  const results = await Listing.readAll();
    res.send(results);
    console.log("GET request received on home page, jobs: " + results);
})

// launching the server
const start = async () => {
  try {
      await connectMongoose();
      app.listen(port, () => console.log(`Server running on port ${port}...`));
  }
  catch (err) {
      console.error(err);
  }
}

start();