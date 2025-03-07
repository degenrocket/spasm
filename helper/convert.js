// const fs = require('fs');
const fs = require('fs/promises');
const path = require('path');
const marked = require('marked');

const mdDir = path.join(__dirname, '../docs');
const htmlDir = path.join(__dirname, '../dist');
const templatePath = path.join(__dirname, 'template.html');

async function convertToHtml() {
  try {
    // Make sure that ./dist exists
    await fs.mkdir(htmlDir, { recursive: true });

    const templateContent =
      await fs.readFile(templatePath, 'utf8');
    const files = await fs.readdir(mdDir);

    for (const file of files) {
      if (file.endsWith('.md')) {
        const mdPath = path.join(mdDir, file);
        const mdContent = await fs.readFile(mdPath, 'utf8');
        const mdContentHtml = marked.parse(mdContent);
        const fileName = file.slice(0,-3)
        const fileNameHtml = fileName + ".html"

        const htmlPath = path.join(htmlDir, fileNameHtml);
        let htmlContent = templateContent

        // Add class to <body> to know which page is selected
        const htmlTagIndex =
          htmlContent.indexOf('<html>');
        if (htmlTagIndex !== -1) {
          htmlContent = htmlContent
            .slice(0, htmlTagIndex + 5)
            + ` class="${fileName}-page"`
            + htmlContent.slice(htmlTagIndex + 5);
        }

        // Add class 'active' to currently selected nav-link
        let navlink = ""
        if (fileName === "index") {
          navlink = `<a class="nav-link" href="/">`
        } else {
          navlink = `<a class="nav-link" href="/${fileName}">`
        }
        const navlinkIndex = htmlContent.indexOf(navlink)
        if (navlinkIndex !== -1) {
          htmlContent = htmlContent
            .slice(0, navlinkIndex + 18)
            + ' active'
            + htmlContent.slice(navlinkIndex + 18);
        }

        // Add content from .md files as html
        const sectionIndex =
          htmlContent.indexOf('</section>');
        if (sectionIndex !== -1) {
          htmlContent = htmlContent
            .slice(0, sectionIndex)
            + mdContentHtml
            + htmlContent.slice(sectionIndex);
        }

        await fs.writeFile(htmlPath, htmlContent);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

convertToHtml();
