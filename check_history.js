const fs = require('fs');
const log = fs.readFileSync('e:/yousef dev/Yousef-Portfolio/git_log.txt', 'utf16le');

// Try to parse the file, maybe it's utf8 actually because ">" in powershell writes utf16le
let lines = log.split('\n');

let currentCommit = '';
let currentDate = '';
let inDataJs = false;
let deletedSnippets = [];
let addedSnippets = [];

for (let line of lines) {
  if (line.startsWith('commit ')) {
    currentCommit = line.replace('commit ', '').trim();
  } else if (line.startsWith('Date:   ')) {
    currentDate = line.replace('Date:   ', '').trim();
  } else if (line.startsWith('diff --git a/data.js b/data.js')) {
    inDataJs = true;
  } else if (line.startsWith('diff --git')) {
    inDataJs = false;
  }

  if (inDataJs) {
    if (line.startsWith('-    title:')) {
      deletedSnippets.push(line.trim());
    } else if (line.startsWith('+    title:')) {
      addedSnippets.push({ title: line.trim(), commit: currentCommit, date: currentDate });
    }
  }
}

console.log('Deleted titles in data.js history:');
console.log(deletedSnippets);

console.log('\nAny added titles matching "Feature":');
console.log(addedSnippets.filter(s => s.title.toLowerCase().includes('feature')));