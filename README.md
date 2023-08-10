# CompTIA Search

## Instructions

1. You must have Node.js installed to run this. https://nodejs.org/en/download
2. Download the repo. https://github.com/webmastersmith/compTIA_Search/archive/refs/heads/main.zip
3. Log in to the compTIA website: https://learn.comptia.org/
4. Go to the CompTIA Lessons page

![comptia lessons page](./img/comptia.PNG)

5. Open developer window (F12). Go to the console tab.

![developer console tab](./img/console.PNG)

6. Copy the code from `compTIA_Scraper.js` and paste into the developer console window.
   1. This will cycle through each page and extract the text.
   2. A file will be created: `compTIA.json` and automatically downloaded when done.
7. Move the newly created file into your `CompTIA_Search folder`.
8. Open terminal in folder.
   1. Install the node modules `npm i`
   2. Start server with `npm start`

![comptia search example](./img/search.PNG)

9. Search any term. Links to the page matches will be shown.
