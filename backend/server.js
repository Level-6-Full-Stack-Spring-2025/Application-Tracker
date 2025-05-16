const cors = require('cors');
const express = require('express');
const { connectMongoose } = require('./connect');
const Listing = require('./models/Listing');
const User = require('./models/User');
const generatePDF = require('./models/ResumeBuilder');

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

app.get('/searchjob', async(req, res) => {
  const keyword = req.query.keyword;
  const results = await Listing.sortByKeyword(keyword);
  res.send(results);
  console.log("GET request received on home page, jobs with keyword "+ keyword + ": " + results);
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

// ---------------------------------------GENERATE RESUME-----------------------------------------------------
const data = {
  name: "Jane Roe",
  email: "Jane123@gmail.com",
  github: "Jane123",
  githubLink: "https://github.com/Jane123",
  linkedin: "Jane Roe",
  linkedinLink: "https://www.linkedin.com/in/janeroe/",

  company1: "Tech Innovators Inc.",
  city1: "Seattle",
  state1: "WA",
  jobtitle1: "Software Engineer",
  startdate1: "Jan 2020",
  enddate1: "Present",
  job1item1: "Developed scalable web applications using React and Node.js.",
  job1item2: "Led a team of 5 developers in transitioning legacy systems to microservices.",

  company2: "NextGen Solutions",
  city2: "San Francisco",
  state2: "CA",
  jobtitle2: "Backend Developer",
  startdate2: "Jun 2017",
  enddate2: "Dec 2019",
  job2item1: "Built and maintained RESTful APIs with Python and Flask.",
  job2item2: "Improved database performance by optimizing PostgreSQL queries.",

  company3: "CodeCraft LLC",
  city3: "Austin",
  state3: "TX",
  jobtitle3: "Junior Developer",
  startdate3: "Jul 2015",
  enddate3: "May 2017",
  job3item1: "Assisted in developing internal tools using JavaScript and PHP.",
  job3item2: "Collaborated with senior developers in Agile sprints.",

  school1: "University of Washington",
  schoolcity1: "Seattle",
  schoolstate1: "WA",
  degree1: "Bachelor of Science",
  field1: "Computer Science",
  schoolstatedate1: "Sep 2011",
  schoolenddate1: "Jun 2015",

  school2: "Greenwood Community College",
  schoolcity2: "Spokane",
  schoolstate2: "WA",
  degree2: "Associate Degree",
  field2: "Information Technology",
  schoolstatedate2: "Sep 2009",
  schoolenddate2: "Jun 2011",

  skill1: "Python",
  skill1level: "5",
  skill2: "JavaScript",
  skill2level: "5",
  skill3: "PHP",
  skill3level: "4",
  skill4: "SQL",
  skill4level: "3",

  project1: "OpenWeather Dashboard",
  project1link: "https://github.com/username/openweather-dashboard",
  project2: "Task Manager App",
  project2link: "https://github.com/username/task-manager-app"
}

app.get('/submit', async (req, res) => {
  try {
    const pdfPath = await generatePDF(data, res);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
});

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