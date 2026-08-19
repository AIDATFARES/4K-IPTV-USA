const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('D:\\IPTV branded\\iptv usa 4k\\src');
files.forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.json') || file.endsWith('.md')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace hex codes
    content = content.replace(/#FF6B00/gi, '#2E5BFF');
    content = content.replace(/#E66000/gi, '#2E5BFF');
    content = content.replace(/#FF8533/gi, '#2E5BFF');
    content = content.replace(/#2563EB/gi, '#2E5BFF');
    content = content.replace(/#049EFF/gi, '#2E5BFF');
    
    // In globals.css, the overrides might still be there with old hex codes, but the regex above will catch the hex codes.
    // Let's also remove the duplicate --color-blue-500 if present
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated hex colors in', file);
    }
  }
});
