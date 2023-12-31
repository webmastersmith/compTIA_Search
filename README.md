# CompTIA Search

## Instructions

1. You can download and run `compTIA-search.exe`. Download the `index.html` to the same directory.
   1. [Windows A+ Core 1 (220-1101)](https://mega.nz/file/419S1Spa#JqnO1SBbOgqCBLFCvShRJDJBOHjDC62XPLkBj-svixA)
   2. [Windows A+ Core 2 (220-1102)](https://mega.nz/file/s4kgGKIR#ncLej9yjBfU-otqK8MtA6XMV-ZjYWmLvDROiFQxUdQI)
   3. [Windows Network+ (N10-008)](https://mega.nz/file/dlNkxKgI#SzCqQbkTKtHr3kcB2sR65aWmpPxhBQN-8VHbtszQvs0)
   4. [Windows Security+ (SY0-601)](https://mega.nz/file/gwVECSSY#DR8IQqgztUk0fd-PdvXp4c5gFHnHATi4MGZi9s_lG1M)
   5. [Windows Cloud+ (CY0-003)](https://mega.nz/file/M1tTjb7K#ukED1zfL8aNVDv01kJY90jkETbXvO2h4e9BVrhAeICE)
2. The windows firewall prompt may open. Just cancel it. The program does not need to communicate with anything.
   1. Windows automatically ask because node express opens a webpage on localhost.
      ![firewall cancel](./img/firewall.PNG)

-

1. OR you can build it from scratch.
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

## Searching

1. Search terms are split and individually searched.
   1. Example: `load balance` will be split into `load` and `balance`. The text can contain `load` and `balance` in any order, separated by anything.
2. To search for word groups, add "quotes" around search term: `"load balance"`. Now `load` will have to be followed by `space`, then `balance` to match.
