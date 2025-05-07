const cors = require('cors');
const express = require('express');
const { connectMongoose } = require('./connect');
const Listing = require('./models/Listing');
const User = require('./models/User');

const port = process.env.PORT || 3002;
const app = express();

app.use(cors());
app.use(express.json());

// ---------------------------------------JOBS-----------------------------------------------------
app.get('/jobs', async (req, res) => {
  const results = await Listing.readAll();
    res.send(results);
    console.log("GET request received on home page, jobs: " + results);
})

app.post('/createjob', async (req, res) => {
  const newJob = req.body;

  if (!newJob || Object.keys(newJob).length === 0) {
    return res.status(400).send("Empty request body");
  }

  const results = await Listing.createNew(newJob);
  res.status(201).json(results);

  console.log("POST request received on create route")
  console.log(`New listing created with id: ${results._id}`);
});

app.delete('/deletejob', async (req, res) => {
  const results = await Listing.delete(req.query.id);
  if (results.deletedCount === 0) {
    return res.status(404).send("Listing not found");
  }
  res.sendStatus(200);
  console.log("DELETE request received on delete route")
  console.log(`Listing deleted with id: ${req.query.id}`);
})

// ---------------------------------------USERS-----------------------------------------------------
app.get('/users', async (req, res) => {
  const results = await User.readAll();
    res.send(results);
    console.log("GET request received on home page, users: " + results);
})

// Post route to post a new message
app.post('/createuser', async (req, res) => {
  const newUser = req.body;

  if (!newUser || Object.keys(newUser).length === 0) {
    return res.status(400).send("Empty request body");
  }

  const results = await User.createNew(newUser);
  res.status(201).json(results);

  console.log("POST request received on create route")
  console.log(`New listing created with id: ${results._id}`);
});

app.delete('/deleteuser', async (req, res) => {
  const results = await User.delete(req.query.id);
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