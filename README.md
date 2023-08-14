# CompTIA Search

## Instructions

1. You can download and run the exe file. It includes everything you need.
2. The windows firewall prompt may open. Just cancel it. The program does not need to communicate with anything.
   1. Windows automatically ask because node express opens a webpage on localhost.
3. ![firewall cancel](./img/firewall.PNG)

-

1. or you can build it from scratch.
2. You must have Node.js installed to run this. https://nodejs.org/en/download
3. Download the repo. https://github.com/webmastersmith/compTIA_Search/archive/refs/heads/main.zip
4. Log in to the compTIA website: https://learn.comptia.org/
5. Go to the CompTIA Lessons page

![comptia lessons page](./img/comptia.PNG)

6. Open developer window (F12). Go to the console tab.

![developer console tab](./img/console.PNG)

7. Copy the code from `compTIA_Scraper.js` and paste into the developer console window.
   1. This will cycle through each page and extract the text.
   2. A file will be created: `compTIA.json` and automatically downloaded when done.
8. Move the newly created file into your `CompTIA_Search folder`.
9. Open terminal in folder.
   1. Install the node modules `npm i`
   2. Start server with `npm start`

![comptia search example](./img/search.PNG)

10. Search any term. Links to the page matches will be shown.
