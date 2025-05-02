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

// Post route to post a new message
app.post('/create', async (req, res) => {
  const newJob = req.body;

  if (!newJob || Object.keys(newJob).length === 0) {
    return res.status(400).send("Empty request body");
  }

  const results = await Listing.createNew(newJob);
  res.status(201).json(results);

  console.log("POST request received on create route")
  console.log(`New listing created with id: ${results._id}`);
});

app.delete('/delete', async (req, res) => {
  const results = await Listing.delete(req.query.id);
  if (results.deletedCount === 0) {
    return res.status(404).send("Listing not found");
  }
  res.sendStatus(200);
  console.log("DELETE request received on delete route")
  console.log(`Listing deleted with id: ${req.query.id}`);
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