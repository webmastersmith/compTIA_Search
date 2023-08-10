const express = require('express');
const cors = require('cors');
const path = require('path');
const sections = require('./compTIA.json');

const port = 3005;
const app = express();
app.use(cors());
app.get('/', (req, res, next) => {
  res.status(200).sendFile(path.join(process.cwd(), 'index.html'));
});
// http://localhost:3005/compTIA.json
app.get('/compTIA.json', (req, res, next) => {
  if (!sections)
    res
      .status(404)
      .send("Could not find the file. make sure it's named: compTIA.json and in the current directory.");
  res.status(200).json(sections);
});

app.listen(port);
console.log(`\nServer listening on http://localhost:${port}`);
// open the page.
const url = 'http://localhost:3005';
const start = process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open';
require('child_process').exec(start + ' ' + url);