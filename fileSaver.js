// fileSaver.js
const fs = require('fs');

function saveFile(filename, content) {
  fs.writeFileSync(filename, content, 'utf8');
  console.log(`File saved: ${filename}`);
}

module.exports = saveFile;
