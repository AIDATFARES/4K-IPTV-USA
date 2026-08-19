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
    
    // Replacements
    content = content.replace(/fiestaiptv\.shop/g, '4kiptvusa.com');
    content = content.replace(/fiestaiptv/g, '4kiptvusa');
    content = content.replace(/Fiesta Basic/g, 'USA Basic');
    content = content.replace(/Fiesta Ultimate/g, 'USA Ultimate');
    content = content.replace(/Fiesta Pro/g, 'USA Pro');
    content = content.replace(/fiestaiptv-new-logo-v4\.webp/g, '4kiptvusa-logo.webp');
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated', file);
    }
  }
});
