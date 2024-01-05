const express = require('express');
const cors = require('cors');
const path = require('path');
// change me to the name of your json file.
const fileName = 'compTIA_Project+PK0-005.json';
// will not be included if dynamic. Must be string.????
const sections = require('./compTIA_JSON/compTIA_Project+PK0-005.json');

const port = 3005;
const app = express();
app.use(cors());
app.get('/', (req, res, next) => {
  res.status(200).sendFile(path.join(process.cwd(), 'index.html'));
});
// http://localhost:3005/compTIA.json
app.get('/compTIA.json', (req, res, next) => {
  if (!sections)
    res.status(404).send(
      `Could not find the ${fileName} file.
      Make sure the file is named: ${fileName} and is in the compTIA_JSON directory.`
    );
  res.status(200).json(sections);
});

app.listen(port);
const url = `http://localhost:${port}`;
console.log(`\nServer listening on ${url}`);
// open the page in browser.
const start = process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open';
require('child_process').exec(start + ' ' + url);
