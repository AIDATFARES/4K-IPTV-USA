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
    
    // Replace tailwind orange colors with blue
    content = content.replace(/orange-50/g, 'blue-50');
    content = content.replace(/orange-100/g, 'blue-100');
    content = content.replace(/orange-200/g, 'blue-200');
    content = content.replace(/orange-300/g, 'blue-300');
    content = content.replace(/orange-400/g, 'blue-400');
    content = content.replace(/orange-500/g, 'blue-500');
    content = content.replace(/orange-600/g, 'blue-600');
    content = content.replace(/orange-700/g, 'blue-700');
    content = content.replace(/orange-800/g, 'blue-800');
    content = content.replace(/orange-900/g, 'blue-900');
    content = content.replace(/orange-950/g, 'blue-950');

    // Also replace some specific hex codes if they exist
    content = content.replace(/#FF6B00/gi, '#2563EB'); // Replace orange hex with blue hex
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated colors in', file);
    }
  }
});
