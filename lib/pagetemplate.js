// writing functions that return an HTML template
// generate team function with functions to generate team member cards (intern, manager, etc)
const fs = require("fs");

function writePage(html) {
  fs.writeFile("./dist/index.html", html, (err) => {
    if (err) {
      throw err;
    }
    console.log("generated index.html file");
  });
}

module.exports = writePage;
