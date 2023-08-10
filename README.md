# CompTIA Search

## Instructions

1. You must have Node.js installed to run this.
2. Download the repo. https://github.com/webmastersmith/compTIA_Search/archive/refs/heads/main.zip
3. Log in to the compTIA website: https://learn.comptia.org/
4. Go to the Lessons page

![comptia lessons page](./img/comptia.PNG)

4. Open developer window (F12). Go to the console tab.

![developer console tab](./img/console.PNG)

5. Copy the code from `compTIA_Scraper.js` and paste into the developer console window.
   1. This will cycle through each page and extract the text.
   2. A file will be created: `compTIA.json` and automatically downloaded when done.
6. Move the newly created file into your `CompTIA_Search folder`.
7. Open terminal in folder. Start server with `npm start`
