(async function () {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const delay = 500;

  // get body and children
  const body = document.getElementById('webapp_show');
  if (!body) throw new Error('Could not get body tag.');

  // Get Lessons
  const lessons = document.querySelectorAll("[id^='child-lesson-category-list-']").length;
  if (lessons < 1) throw new Error('No lessons found.');
  const range = [...Array(lessons).keys()]; //[0,1,2,3,4,5,6,7,8,9]

  const sections = [];

  // Loop each section
  for (const id of range) {
    await getSectionData(id, body);
  }

  // Loop each subSection
  async function getSectionData(idx, body) {
    // get section title.
    const sectionTitle = body
      .querySelector(`#child-lesson-category-list-${idx}`)
      .previousSibling.previousSibling.querySelector('h3').innerText;
    if (!sectionTitle) console.log('Section Title not found.');

    // Get links for current section.
    const links = [...body.querySelectorAll(`#child-lesson-category-list-${idx} > div ul li a`)]; // each link.
    if (links.length < 1) return;

    // loop all links. Get Data.
    for (const [i, link] of links.entries()) {
      try {
        link.click();
        const title = link.getAttribute('aria-label').replace(' Click here to view this Lesson', '') || '';
        const href = link.getAttribute('href') || '';
        await sleep(delay);
        const dataHTML = await getPageData();
        const data =
          dataHTML.innerHTML
            .replace(/(<([^>]+)>)/gi, '')
            .replace(/(\t|\r?\n)/gi, ' ')
            .replace(/&nbsp;/gi, ' ')
            .replace(/ {2,}/gi, ' ')
            .toLowerCase() || '';
        sections.push({
          idx,
          sectionTitle,
          subIndex: i,
          title,
          href,
          data,
        });
      } catch (e) {
        console.log(`Failed to get data from index ${i}. Section: ${sectionTitle}`);
      }
    }
  } // end getSectionData()

  // console.log(sections);

  // <a id="downloadContent" style="display:none"></a>
  const a = document.createElement('a');
  a.id = 'downloadContent';
  a.style = 'display:none';
  a.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(sections)));
  a.setAttribute('download', 'compTIA.json');
  a.click();
  a.remove();

  async function getPageData() {
    return new Promise((res, rej) => {
      // wait for page to go idle(everything has downloaded), before add items to memory.
      window.requestIdleCallback(
        () => {
          let data = '';
          try {
            data = document.querySelector('#content-lesson-start');
          } catch (e) {
            rej('problem with function');
          }
          // add to the new page items to sections array.
          res(data);
        },
        { timeout: 5000 }
      );
    });
  } // end getItems()
})();
