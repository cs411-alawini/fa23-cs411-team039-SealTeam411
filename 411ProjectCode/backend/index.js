const express = require('express');
const app = express();
const mysql = require("mysql");

var cors = require('cors');
app.use(cors());

var db = mysql.createConnection({
  host: '35.239.159.93',
  user: 'root',
  password: 'odyssey',
  database: 'ProjectOdyssey',
});

db.connect((err) => {
  if (err) {
    console.log('Database connection failed:', err);
  } else {
    console.log('Connected to the database');
  }
});


//Find Research Groups
app.get('/findResearchGroup', (require, response) => {
  const studentProfessorJoin = `
      SELECT pr.ResearchGroupWebsite, pr.ResearchArea, pr.ResearchTopic, pr.email, 
      pr.FirstName, pr.LastName, pr.Department 
      FROM Students st JOIN Professors pr ON st.Interests = pr.ResearchArea;`;

  db.query(studentProfessorJoin, (err, results) => {
    response.send(results);
  });

});


//RSO Finder!
app.get('/findRSO', (require, response) => {
  const studentRSOJoin = `
    SELECT pr.ResearchGroupWebsite, pr.ResearchArea, pr.ResearchTopic, pr.email, 
    pr.FirstName, pr.LastName, pr.Department 
    FROM students st JOIN RSOs r ON st.Department = r.RSOArea;`;

  db.query(studentRSOJoin, (err, results) => {
    response.send("Hello Ram Goenka!");
  });
});

// Use a single app.listen to start the server
const port = 3002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});







// Backend API Route
app.post('/api/findResearchGroups', (req, res) => {
  const { major, graduationYear, coursesTaken, skills, rsos, researchInterest } = req.body;

  // Your logic to query the database with the provided parameters
  const query = `
      SELECT pr.ResearchGroupWebsite, pr.ResearchArea, pr.ResearchTopic, pr.email, 
      pr.FirstName, pr.LastName, pr.Department 
      FROM Students st JOIN Professors pr ON st.Interests = pr.ResearchArea
      WHERE st.Major = ? AND st.GraduationYear = ? AND st.CoursesTaken = ? AND st.Skills = ? AND st.RSOs = ? AND st.ResearchInterest = ?;
  `;

  db.query(query, [major, graduationYear, coursesTaken, skills, rsos, researchInterest], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});


// Backend API Route
app.post('/api/findRSO', (req, res) => {
  const { major, year, interests } = req.body;

  // Your logic to query the database with the provided parameters
  const query = `
      SELECT pr.ResearchGroupWebsite, pr.ResearchArea, pr.ResearchTopic, pr.email, 
      pr.FirstName, pr.LastName, pr.Department 
      FROM students st JOIN RSOs r ON st.Department = r.RSOArea
      WHERE st.Major = ? AND st.Year = ? AND st.Interests = ?;
  `;

  db.query(query, [major, year, interests], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});
